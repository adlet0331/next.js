
import Login from './components/modules/login'

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div>
        <div style={{ flex: '0 0 50%' }}></div>
        <aside style={{ flex: '0 0 25%', background: 'white' }}>
          <Login />
        </aside>
      </div>
      <div />
    </div>
  );
};

export default Home;
