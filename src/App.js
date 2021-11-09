import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchFromBFF } from './utils/HelloWorld';
import Logo from './logo.svg';
const AppStyle = styled.div`
  color: #fff;
  text-align: center;
  background-color: #2d2d2d;
  img{
    color: #fff;
  }
`
function App() {
  const [data,setData] = useState({
    load: false,
    message: ''
  })
  
  useEffect( () => {
    fetchFromBFF.then(data => setData(data))
  },[])

  return (
    <AppStyle>
      {data.load ? <img src={Logo} alt='logo' /> : null}
      <h1>Hello World!</h1>
      <p>UI setup successfully</p>
      <p>{data.message}</p>
    </AppStyle>
  );
}

export default App;
