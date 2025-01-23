'use client'
import { useState, useEffect } from 'react';

const LocalStorageComponent = () => {
  const [name, setName] = useState<string>('');
  
  // Menyimpan data ke localStorage
  const saveToLocalStorage = (value: string) => {
    localStorage.setItem('name', value); // Menyimpan nilai ke localStorage
    setName(value); // Menyimpan nilai ke state
  };

  // Menghpus local storage dengan nama item tertentu
  const removeLocalStorage = () => {
    localStorage.removeItem('name');
  }

  // Mengambil data dari localStorage
  useEffect(() => {
    const savedName = localStorage.getItem('name');
    if (savedName) {
      setName(savedName); // Set data dari localStorage ke state jika ada
    }
  }, []); // Hanya dijalankan sekali setelah komponen dimuat

  return (
    <div>
      <h1>Nama: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Masukkan nama"
      />
      <button onClick={() => saveToLocalStorage(name)}>Simpan ke LocalStorage</button>
      <button onClick={removeLocalStorage} className='btn btn-success'>remove local storage</button>
    </div>
  );
};

export default LocalStorageComponent;
