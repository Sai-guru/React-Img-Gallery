import WSPGallery from './components/WSPGallery';
import { galleryImages, galleryHeader } from './components/galleryData';
import './App.css';

function App() {
  return (
    <div className="App">
      {galleryHeader}
      <WSPGallery galleryImages={galleryImages} />
    </div>
  );
}

export default App;
