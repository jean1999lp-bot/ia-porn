export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', textAlign: 'center', background: '#000', color: '#fff' }}>
      <h1 style={{ color: '#ff0000' }}>IA +18 - GERE IMAGENS NSFW</h1>
      <p style={{ fontWeight: 'bold', color: '#ff0000' }}>AVISO: CONTEÚDO +18 - USE COM RESPONSABILIDADE</p>
      <form action="/api/generate" method="POST">
        <input 
          name="prompt" 
          placeholder="mulher nua na praia, realista, 4k, seios grandes" 
          style={{ width: '80%', padding: '12px', fontSize: '18px', margin: '10px', border: '1px solid #fff' }}
          required 
        />
        <br />
        <button type="submit" style={{ padding: '12px 30px', fontSize: '18px', background: '#000', color: '#fff', border: '1px solid #fff', cursor: 'pointer' }}>
          GERAR IMAGEM +18
        </button>
      </form>
    </div>
  );
}
