import './VeraText.scss'
import { useEffect } from 'react';
import  Vara  from 'vara';

function VaraText( { text } ) {
    useEffect(() => {
      var vara = new Vara(
        "#vara-container",
        "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json",
        [
          {
            text: text,
            fontSize: 50,
            strokeWidth: 1.5,
            color: 'white',
            duration: 5000,
            delay: 1000

          },
        ],
        
            {

            }
        
      );
    }, []);
  
    return <div id="vara-container" className="z-[50]  "></div>;
  }

export default VaraText;