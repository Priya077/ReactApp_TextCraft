import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import './App.css';
<script>
    let conf = confirm("Are you sure you want to delete?");
</script>


function App() {
    return (
      <div>
      <Navbar title="TextUtility"></Navbar>
      <TextForm heading="Convert to UpperCase"></TextForm>
      </div >
  );
}

export default App;
