import { useEffect, useState } from 'react';
import { checkRefreshLimit, resetRefreshCount } from '../utils/botProtection';
import { useLanguage, useTranslation } from '../contexts/LanguageContext';
import './BotProtection.css';

export default function BotProtection() {
  const { language } = useLanguage();
  const t = useTranslation();
  const [blocked, setBlocked] = useState(false);
  const [message, setMessage] = useState<string | undefined>();
  const [timeRemaining, setTimeRemaining] = useState<number | undefined>();

  useEffect(() => {
    const result = checkRefreshLimit();
    
    if (!result.allowed) {
      setBlocked(true);
      
      // Use translated messages
      if (language === 'sk') {
        if (result.timeRemaining) {
          setMessage(`Prístup dočasne obmedzený. Skúste to znova o ${result.timeRemaining} minút.`);
        } else {
          setMessage('Zistených príliš veľa rýchlych obnovení stránky. Prístup bol dočasne obmedzený na 1 hodinu.');
        }
      } else {
        setMessage(result.message);
      }
      
      setTimeRemaining(result.timeRemaining);

      // Prevent page refresh
      const handleBeforeUnload = (e: BeforeUnloadEvent) => {
        e.preventDefault();
        e.returnValue = '';
        return '';
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      // Update countdown every minute
      if (result.timeRemaining) {
        const interval = setInterval(() => {
          const currentResult = checkRefreshLimit();
          if (currentResult.allowed) {
            setBlocked(false);
            setMessage(undefined);
            setTimeRemaining(undefined);
            window.removeEventListener('beforeunload', handleBeforeUnload);
            clearInterval(interval);
          } else if (currentResult.timeRemaining) {
            setTimeRemaining(currentResult.timeRemaining);
            if (language === 'sk') {
              setMessage(`Prístup dočasne obmedzený. Skúste to znova o ${currentResult.timeRemaining} minút.`);
            }
          }
        }, 60000); // Update every minute

        return () => {
          clearInterval(interval);
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, [language]);

  if (!blocked) {
    return null;
  }

  return (
    <div className="bot-protection-overlay">
      <div className="bot-protection-modal">
        <div className="bot-protection-icon">🛡️</div>
        <h2>{language === 'sk' ? 'Prístup obmedzený' : 'Access Restricted'}</h2>
        <p>{message}</p>
        {timeRemaining && (
          <p className="bot-protection-timer">
            {language === 'sk' ? 'Zostáva:' : 'Time remaining:'} {timeRemaining} {timeRemaining === 1 
              ? (language === 'sk' ? 'minúta' : 'minute') 
              : (language === 'sk' ? 'minút' : 'minutes')}
          </p>
        )}
        <button 
          className="bot-protection-button" 
          onClick={() => {
            resetRefreshCount();
            setBlocked(false);
            window.location.reload();
          }}
        >
          {language === 'sk' ? 'Rozumiem' : 'I Understand'}
        </button>
        <p className="bot-protection-note">
          {language === 'sk' 
            ? 'Táto ochrana pomáha udržiavať kvalitu služby pre všetkých používateľov.'
            : 'This protection helps maintain service quality for all users.'}
        </p>
      </div>
    </div>
  );
}

