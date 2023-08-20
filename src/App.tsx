import {SectionType} from './types.d.ts';
import 'react-toastify/dist/ReactToastify.css';
import "./style/app.css";
import useStore from './hooks/useStore.ts';
import TranslateInput from './components/TranslateInput.tsx';
import InterchangeButton from './components/InterchangeButton.tsx';
import useLanguageColumns from './hooks/useLanguageColumns.ts';
import SelectLanguageColumns from './components/SelectLanguageColumns.tsx';
import CopyClipboardButton from './components/CopyClipboardButton.tsx';
import { translate } from './services/translate-api.ts';
import { useEffect } from 'react';
import useDebounce from './hooks/useDebounce.ts';
import SpeechButton from './components/SpeechButton.tsx';


function App() {

  const {
    fromLanguage,
    toLanguage,
    input,
    result,
    loading,
    changeInput,
    setResult,
    changeFromLanguage,
    changeToLanguage,
    interchangeLanguages
  } = useStore();

  const {
    fromColumns,
    toColumns,
    setFromColumn,
    setToColumn,
    interchangeColumns,
    setLanguageFromColumn,
    setLanguageToColumn
  } = useLanguageColumns(changeFromLanguage, changeToLanguage, interchangeLanguages);

  const debouncedInput = useDebounce(input, 500);

  

  useEffect(() =>{
    if(debouncedInput === "") return;

    translate(fromLanguage, toLanguage, debouncedInput)
    .then(value => {
      if(value == null) return;
      setResult(value);
    })

  },[debouncedInput, fromLanguage, toLanguage])


  return (
      <main className="main-container">
        <div className="translate-input">
          <div className="translate-input__options">
            <SelectLanguageColumns
            type={SectionType.From}
            updateLanguage={setLanguageFromColumn}
            changeColumn={setFromColumn}
            columns={fromColumns}
            />
            <TranslateInput 
            onChange={changeInput}
            type={SectionType.From}
            value={input}
            />
          </div>
        </div>
        <InterchangeButton interchangeLanguages={interchangeColumns} />
        <div className="translate-input">
          <div className="translate-input__options">
            <SelectLanguageColumns
            type={SectionType.To}
            updateLanguage={setLanguageToColumn}
            changeColumn={setToColumn}
            columns={toColumns}
            />
            <TranslateInput 
            onChange={setResult}
            type={SectionType.To}
            value={result}
            loading={loading}
            />
            <div className="translate-input__extra">
              <CopyClipboardButton
              text={result}
              className="translate-input__feature"
              />
              <SpeechButton 
                className='translate-input__feature'
                text={result}
                language={toLanguage}
              />
            </div>
            
          </div>


        </div>
        
      </main>
  )
}

export default App
