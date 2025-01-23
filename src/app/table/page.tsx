'use client'
import { useState, useEffect } from 'react';
import CustomButton from '../component/button';

interface OS{
  id: number;
  nama: string;
}

const ExampleComponent = () => {
  const [data, setData] = useState<OS[]>([]); // Menyimpan data yang di-fetch
  const [loading, setLoading] = useState(true); // Menyimpan status loading
  const filter = "";
  const [searchlokal, setMyVariable] = useState("");
  const [tempData, setTempData] = useState<OS[]>([]);


  useEffect(() => {
    // Mengambil data saat komponen pertama kali dimuat
    fetch('https://personal-o82dwvqr.outsystemscloud.com/Research/rest/CRUD/Get?Filter='+filter+'&Search='+searchlokal) // Ganti dengan URL API yang sesuai
      .then((response) => response.json()) // Parsing response JSON
      .then((data) => {
        setData(data); // Mengatur data yang diterima
        setLoading(false); // Set loading ke false setelah data diterima
        setTempData(data);
      })
  }, []); // [] berarti useEffect hanya dijalankan sekali, saat komponen pertama kali dimuat

  if (loading) {
    return <p>Loading...</p>; // Menampilkan pesan loading jika data sedang diambil
  }
  
  function refreshcoy () {

    fetch('https://personal-o82dwvqr.outsystemscloud.com/Research/rest/CRUD/Get') // Ganti dengan URL API yang sesuai
      .then((response) => response.json()) // Parsing response JSON
      .then((data) => {
        setData(data); // Mengatur data yang diterima
        //setLoading(false); // Set loading ke false setelah data diterima
      })
  }

  const DeleteData = async (id_del : any) => {
    
    await fetch('https://personal-o82dwvqr.outsystemscloud.com/Research/rest/CRUD/Delete?Id='+id_del, {method: 'DELETE',});
    //window.location.href = '/table';
    refreshcoy();
  }

  const Refresh = async (searchs : any) => {
    searchs = searchlokal
    console.log(searchs)
    fetch('https://personal-o82dwvqr.outsystemscloud.com/Research/rest/CRUD/Get?Filter='+filter+'&Search='+searchs) // Ganti dengan URL API yang sesuai
      .then((response) => response.json()) // Parsing response JSON
      .then((data) => {
        setData(data); // Mengatur data yang diterima
        setLoading(false); // Set loading ke false setelah data diterima
      })
  }

  return (
    <div style={{paddingRight: '5%', paddingLeft: '5%', paddingTop: '2%'}}>
      <div id='Title'>
        <h1 className='text-left text-4xl font-bold mb-5'>Data Karyawan</h1>
      </div>
      <div  id='SearchAndAddData' className="grid grid-cols-2 gap-2">
        <div className='w-full text-left' id='Search'>
          <input type="text" id="Search" placeholder='Search' className='border-solid rounded-md mr-2 w-1/4' onChange={(asdqwe) => {setMyVariable(asdqwe.target.value)}}/>
          <button className='btn btn-success text-white' onClick={Refresh}>Search</button>
        </div>
        <div className='w-full text-right' id='AddData'>
          <select id="Dropdown" name='EmployeeDropdown'  className='border-solid rounded-md w-1/4 mr-5' onClick={Refresh} onChange={(asdqwe) => {setMyVariable(asdqwe.target.value)}}>
            {tempData.slice(0, 5).map(OS => (
              <option value={OS.nama} key={OS.nama}>{OS.nama}</option>
            ))}
          </select>
          <button className='btn btn-success text-white w-1/4'>Tambah data</button>
        </div>
      </div>
      <div id='Table' className="overflow-x-auto mt-5">
        <table className="table">
          <thead>
            <tr>
              <th className='text-center bg-neutral text-white rounded-tl-md'>Name</th>
              <th className='text-center bg-neutral text-white rounded-tr-md'>Aksi</th>
            </tr>
          </thead>
          <tbody>
              {data.slice(0, 5).map(OS => (
                <tr key={OS.id}>
                  <td className='text-center'>{OS.nama}</td>
                  <td className='text-center'><CustomButton href={`/employee/${OS.nama}`} className='btn btn-success text-white' children='Detail'/><span>  </span><CustomButton href={`/table`} className='btn btn-success text-white' children='Delete'onClick={() => DeleteData(OS.id)}/></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ExampleComponent;