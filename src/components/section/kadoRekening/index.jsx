import React from 'react';

const KadoRekening = () => {
  // Data rekening dengan logo
  const rekeningList = [
    { 
      id: 1, 
      bank: '',
      nomor: '085361269299', 
      nama: 'Muhammad Ichsan Nurzaman', 
      logo: '/images/danafix.png'
    },
    { 
      id: 2, 
      bank: '', 
      nomor: '123456789', 
      nama: 'Muhammad Ichsan Nurzaman', 
      logo: '/images/bankjago.png' 
    },
    { 
      id: 3, 
      bank: '', 
      nomor: '123456789', 
      nama: 'Muhammad Ichsan Nurzaman', 
      logo: '/images/seabank.png' 
    },
  ];

  return (
    <div style={{ padding: '5px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontWeight: 'bold', textAlign: 'center', color: '#808080' }}>Kirim Hadiah</h1>
      <p style={{ margin: '5px', fontSize: '13px', textAlign: 'center'}}>
        Terima kasih atas kehadiran dan doa restu Anda. bagi Kamu yang ingin memberikan hadiah untuk pernikahan kami, berikut adalah nomor rekening kami:
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
        {rekeningList.map((rekening) => (
          <div
            key={rekening.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '0.5px solid #ccc',
              borderRadius: '10px',
              padding: '10px',
              width: '320px',
              textAlign: 'center',
              boxShadow: '10px 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#808080',
            }}
          >
            <img 
              src={rekening.logo} 
              alt={`${rekening.bank} Logo`} 
              style={{ width: '75px', height: '40px', marginBottom: '5px' }}
            />
            <h3 style={{ margin: '0', color: '#2E8B57' }}>{rekening.bank}</h3>
            <p style={{ margin: '5px 0', fontSize: '15px' }}>
              <strong>{rekening.nomor}</strong>
            </p>
            <p style={{ fontWeight: 'bold', fontSize: '12px', margin: '2px 0', color: '#ffffff' }}>a.n {rekening.nama}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KadoRekening;
