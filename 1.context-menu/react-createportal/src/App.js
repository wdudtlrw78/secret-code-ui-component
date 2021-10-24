import { useRef, useState } from 'react';
import ContextPortal from './ContextPortal';
import Detail from './Detail';
import dummyData from './dummyData';
import './index.css';

function App() {
  const [openedIndex, setOpenedIndex] = useState(null);
  const detailRefs = useRef([]);

  const togglePopover = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenedIndex(e.target.parentElement.open ? null : index);
  };

  return (
    <>
      <div className="wrapper">
        {dummyData.map(({ text, context }, i) => (
          <Detail
            key={i}
            ref={(r) => (detailRefs.current[i] = r)}
            text={text}
            context={context}
            open={openedIndex === i}
            onToggle={(e) => togglePopover(i, e)}
          />
        ))}
      </div>

      <ContextPortal
        target={detailRefs.current[openedIndex]}
        children={<p>{dummyData[openedIndex]?.context}</p>}
      />
    </>
  );
}

export default App;
