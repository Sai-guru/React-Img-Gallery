import WSPGallery from './components/WSPGallery';
import './App.css';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';

function App() {

  const galleryImages = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
  ];
  return (
    <div className="App">
      <br />
      <div>
        <strong>My Gallery Images</strong>
      </div>
      <br /><br />
      <div style={{ height: '30vh' }}></div>
      <WSPGallery
        galleryImages={galleryImages}
      />
 <div style={{ height: '200vh' }}></div>
      <br /><br />
      <div></div>
    </div>
  );
}

export default App;
