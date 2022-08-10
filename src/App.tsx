import type { Component } from 'solid-js';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';

const App: Component = () => {
  return (
    <div class="flex flex-col bg-slate-900 min-w-screen min-h-screen">
      <Nav/>
      <Header/>
      <Footer/>
    </div>
  );
};

export default App;
