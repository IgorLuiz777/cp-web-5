
import Button from "../button/button";

const listaAparelhos = [
    {
      modelo: "Nokia 3310",
      marca: "Nokia",
      descricao: (
        <>
            <p>Display: 80x101 px</p>
            <p>Camera: 2 MP com flash</p>
            <p>Bateria: 1200 mAh</p>
            <p>Armazenamento: 16MB</p>
            <p>Processador: Single-core 460 MHz</p>
        </>
      ),
      preco: 530,
      foto: "nokia.png",
      botao: "/prod1",
    },
    {
      modelo: "Samsung Galaxy z Flip3",
      marca: "Samsung",
      descricao: (
        <>
            <p>Display: 1800x2640 px</p>
            <p>Camera: 24 mpx</p>
            <p>Bateria: 3300 mAh</p>
            <p>Armazenamento: 256 GB</p>
            <p>RAM: 8 gb 3200 MHz</p>
            <p>CPU: 8 cores 2.42 GHz</p>
            <p>GPU: Qualcomm Adreno 840 MHz</p>
        </>
      ),
      preco: 4100,
      foto: "zflip.png",
      botao: "/prod2",
    },
    {
        modelo: "Iphone 15",
        marca: "Apple",
        descricao: (
          <>
              <p>Display: 2556x1179 px</p>
              <p>Camera: 48 MP</p>
              <p>Bateria: 4.422 mAh</p>
              <p>Armazenamento: 512 GB</p>
              <p>CPU: 6 cores 3.46 GHz</p>
              <p>GPU: 5 cores 1398 MHz</p>
          </>
        ),
        preco: 10200,
        foto: "iphone15.png",
        botao: "/prod3",
      },
      {
        modelo: "iPad 10°",
        marca: "Apple",
        descricao: (
          <>
              <p>Display: 2360x1640 px</p>
              <p>Camera: 12 mpx</p>
              <p>Bateria: 28,6 W/h</p>
              <p>Armazenamento: 256 GB</p>
              <p>CPU: 6 cores 460MHz</p>
          </>
        ),
        preco: 7100,
        foto: "ipad.png",
        botao: "/prod4",
      },
      {
        modelo: "Tablet Samsung Galaxy S9",
        marca: "Samsung",
        descricao: (
          <>
              <p>Display: 2560x1600 px</p>
              <p>Camera: 13 Mp</p>
              <p>Bateria: 8400 mAh</p>
              <p>RAM: 8 GB</p>
              <p>Armazenamento: 256 GB</p>
              <p>CPU: 8 cores 2.6GHz</p>
              <p>GPU: Adreno 740</p>
          </>
        ),
        preco: 5600,
        foto: "tablet.jpg",
        botao: "/prod5",
      },
    
  ];
  
  export default listaAparelhos;
  