'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Alert from '../component/alert'
import * as XLSX from 'xlsx';

interface Employee{
    id: number;
    nama: string;
}

const Project = () => {
    const [data, setData] = useState<Employee[]>([]);
    const [employeeCount, setEmployeeCount] = useState(0);
    const [dropdownData, setDropdownData] = useState<Employee[]>([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [alert, setAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [updateData, setUpdateData] = useState<Employee[]>([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [id, setUpdateId] = useState('');
    const [nama, setUpdateNama] = useState('');

    useEffect(() => {
        const uname = localStorage.getItem('uname');
        if(uname == "" || uname == undefined){
            window.location.href = '/LoginNew'
        }else{
            fetch('https://personal-o82dwvqr.outsystemscloud.com/Research/rest/CRUD/Get')
            .then((res) => res.json())
            .then((data) => { 
            setData(data);
            setEmployeeCount(data.length);
            setDropdownData(data);
            setDropdownData((addUser) => [...addUser, {id: 0, nama: ""}]); // cara menambahkan data tambahan ke dropdown
            console.log(data)
        })
        }

    }, []) // [] berarti useEffect hanya dijalankan sekali, saat komponen pertama kali dimuat

    function Search() {
        
        fetch('https://personal-o82dwvqr.outsystemscloud.com/Research/rest/CRUD/Get?Filter='+filter+'&Search='+search)
        .then((res) => res.json())
        .then((data) => { 
            setData(data);
            setEmployeeCount(data.length);
            const sortedDropdownData = [...dropdownData].sort((a, b) => a.id - b.id); // Cara sorting data by id (asc)
            setDropdownData(sortedDropdownData); // Cara sorting data by id (asc)
        })
    }

    const Delete = async (in_id : any) => {
        setIsLoading(true);
        await fetch('https://personal-o82dwvqr.outsystemscloud.com/Research/rest/CRUD/Delete?id='+in_id, {method: 'DELETE'})
        Search();
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 2000);
        setIsLoading(false);
    }

    async function UpdateData(){
        const update = {id, nama};

        await fetch('https://personal-o82dwvqr.outsystemscloud.com/Research/rest/CRUD/Update', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(update),
        })

        setIsUpdate(false);
        Search();
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 2000);
        setIsLoading(false);
        
    }

    function GetUserByIDNew(in_id : any, in_nama : any){
       setUpdateId(in_id);
       setUpdateNama(in_nama);
       setIsUpdate(true);
    }

    function Logout(){
        localStorage.removeItem('uname')
        window.location.href = '/LoginNew'
    }

    function ExportExcel (){
        const dataexport = data.map(item => ({nama: item.nama}))
        const ws = XLSX.utils.json_to_sheet(dataexport);  // Mengubah data JSON menjadi sheet Excel
        const wb = XLSX.utils.book_new();           // Membuat workbook baru
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1"); // Menambahkan sheet ke dalam workbook
    
        // Membuat file Excel dan memulai download
        XLSX.writeFile(wb, "data_export.xlsx");
    }
    
  return (

    <div> {/* className sebelumnya diisi container mx-auto */}
        <title>User</title>
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content container mx-auto">
                {/* page content */}
                {alert && (
                    <Alert className='bg-neutral text-white' textAlert='Berhasil'/>
                )}
                <h1 className='font-bold text-center text-4xl mb-5'> Data User ({employeeCount})</h1>

                <div id='search_and_filter' className='grid grid-cols-2 gap-2 mb-5'>
                    <div id='search' className='text-left'>
                        <input type="text" className='rounded-md border-neutral-500' placeholder='Search' onChange={(e) => {setSearch(e.target.value)}}/>
                        <button className='btn btn-success text-white ml-5' onClick={Search}>Search</button>
                    </div>
                    <div id='filter_dropdown' className='text-right'>
                        <select id="dropdown_nama" className='rounded-md border-neutral-500 w-1/5 mr-5' onChange={(e) => {setFilter(e.target.value)}} onClick={Search}>
                            {dropdownData.map(Employee => (
                                <option value={Employee.nama} key={Employee.nama}>{Employee.nama}</option>
                            ))}
                        </select>
                        <a href="/userAdd"><button className='btn btn-success text-white'>Create New Data</button></a>
                    </div>
                </div>

                <div id='table' className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                        <tr>
                            <th className='bg-neutral text-white rounded-tl-md text-lg text-center'>Id</th>
                            <th className='bg-neutral text-white text-lg text-center'>Name</th>
                            <th className='bg-neutral text-white rounded-tr-md text-lg text-center'>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {data.map((Employee) => { //apabila mau menampilkan data lebih dari 5, ganti angka 5 pada data.slice(0, 5) menjadi data.slice(0, data.length)
                                return (
                                    <tr key={Employee.id} className="text-center">
                                        <td>{Employee.id}</td>
                                        <td>{Employee.nama}</td>
                                        <td>
                                            <button className='btn btn-success text-white mr-5' onClick={() => GetUserByIDNew(Employee.id, Employee.nama)}>Update</button>
                                            <button onClick={() => Delete(Employee.id)} className='btn btn-warning text-white mr-5'>
                                                {isLoading ?(
                                                    <span className="loading loading-spinner loading-xs"></span>
                                                ): (
                                                    <span>Delete</span>
                                                )}
                                            </button>
                                            
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {isUpdate ?(
                    <div>
                        <input disabled type="text" value={id} className='hidden'/>
                        <input  type="text" value={nama} onChange={(e) => {setUpdateNama(e.target.value)}}/>
                        <button className='btn btn-success text-white' onClick={UpdateData}>Update</button>
                    </div>
                ):(
                    null
                )}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li className=''><a href=""><img src="/LogoNew.svg" alt="Logo" /></a></li>
                    <li id='export_excel'>
                        <button className="" onClick={ExportExcel}>
                        <svg width="15" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 1.75C13.6574 1.75 15.4062 3.14911 15.4062 4.875V5.5H7.59375V4.875C7.59375 3.14911 9.34264 1.75 11.5 1.75ZM16.9688 5.5V4.875C16.9688 2.45875 14.5203 0.5 11.5 0.5C8.47969 0.5 6.03125 2.45875 6.03125 4.875V5.5H0.5625V18C0.5625 19.3807 1.96161 20.5 3.6875 20.5H19.3125C21.0384 20.5 22.4375 19.3807 22.4375 18V5.5H16.9688ZM2.125 6.75H20.875V18C20.875 18.6904 20.1754 19.25 19.3125 19.25H3.6875C2.82455 19.25 2.125 18.6904 2.125 18V6.75Z" fill="#757575"/>
                        </svg>
                            Export Excel
                        </button>
                    </li>
                    <li><a>Sidebar Item 2</a></li>
                    <div className='p-5' style={{position: 'absolute',left: 0, bottom: 0, width: 'auto'}}><li className='bg-black text-white rounded-full'><a onClick={Logout}>Log out</a></li></div>
                </ul>
            </div>
        </div>
    </div>

  )
}

export default Project