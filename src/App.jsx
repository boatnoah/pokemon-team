const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center mr-80">
        <h1 className="font-bold text-4xl">Create your own Pokemon!</h1>
        <h3>Here is where you can create your very own set of Pokemon!</h3>
      </div>
      <img
        src="./src/assets/nobgpickachu.png"
        className="w-[700px] h-[700px]"
      />
    </div>
  );
};

export default App;
