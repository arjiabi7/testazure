'use client'
import React, {useState} from 'react'
import jsPDF from 'jspdf'

const page = () => {

    const [content, setContent] = useState('Ini adalah contoh konten yang akan diekspor ke PDF');

    const exportPDF = () => {
        const doc = new jsPDF();

        // Menambahkan teks ke PDF
        doc.text(content, 10, 10);

        // Menyimpan PDF dengan nama file tertentu
        doc.save('file-eksport.pdf');
    };

  return (
    <div>
        <h1>Export PDF di Next.js</h1>
        <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='border-none'
        />
        
        <br />
        <button onClick={exportPDF}>Export to PDF</button>
    </div>
  )
}

export default page