import { Message } from "primereact/message";

const Index = () => {
  return (
    <div className="flex flex-column">
      <h1>Index</h1>
      <Message
        severity="warn"
        text="Esta aplicación se está desarrollando y aún no representa la calidad del producto final"
      />
      <p className="text-center">
        Puedes utilizar los enlaces del menú para navegar por la aplicación
      </p>
    </div>
  );
};

export default Index;
