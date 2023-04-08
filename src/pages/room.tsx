import React, { useState } from 'react'
import { useLogedAccount, useLogOut, useDelelteDocument, useListDocuments, useCreateDocuments, useUpdateDocument, useGetDocument, useConfig } from 'appwrite-web-react';
import { client, account, database } from '../../utils/utils';

function room() {
  const [file, setFile] = useState<File | null>(null);
  const [movie, setMovie] = useState({
    name: "",
    year: ""
  });
  const [update, setUpdate] = useState({
    name: ''
  });


  let { data: movies, error } = useListDocuments(client, database, '6419e430d6e729855247', '641ac8e4d587151104b5');
  let { data: user } = useLogedAccount(account);

  const { data } = useGetDocument(database, '', '', '');

  function submitMovie() {
    useCreateDocuments({
      name: movie.name,
      year: movie.year
    },
      database
    );
    setMovie({ ...movie, name: " ", year: " " });
  }

  return (
    <div>
      <div className='flex justify-between m-3 mb-0 '>
        <p className='text-xl font-semibold underline'>Hello: {user?.name}</p>
        <button onClick={() => useLogOut(account)} className="button bg-[#f02d64] text-white p-2 rounded">Log out</button>
      </div>

      <div className='flex gap-3 m-10 mb-5 items-center justify-center'>
        <div className='w-96'>
          <div className='ml-2 mb-1'>Movie Name</div>
          <input className='border-2 h-10 focus:outline-none p-1 w-96 ml-2' type='text' value={movie.name} placeholder='enter movie name' onChange={(e) => setMovie({ ...movie, name: e.target.value })} />
        </div>
        <div className='w-96'>
          <div className='ml-2 mb-1'>Release Year</div>
          <input className='border-2 h-10 focus:outline-none p-1 w-96 ml-2' type='number' value={movie.year} placeholder='enter release year' onChange={(e) => setMovie({ ...movie, year: e.target.value })} />
        </div>
        <button onClick={submitMovie} className="button bg-[#f02d64] text-white p-2 mt-7 ml-3 rounded">Submit</button>
      </div>

      <div className='mb-5 text-lg flex justify-center'>
        <div className='w-[700px]'>
          <div className='flex justify-between'>
            <div className='flex gap-2 w-[350px] justify-between'>
              <div>Movie Name</div>
              <div>Release Year</div>
            </div>
            <div>Update</div>
            <div>Remove</div>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='w-[700px]'>

          {movies?.map((movie: any) => {
            return (
              <div className='flex justify-between mb-2 mt-2 items-center'>
                <div className='flex gap-2 w-[350px] justify-between'>
                  <div>{movie.name}</div>
                  <div>{movie.year}</div>
                </div>

                <div className='flex gap-2 ml-2 mr-2'>
                  <input
                    onChange={(e) => setUpdate({ ...update, name: e.target.value })}
                    className='border-2 h-8 p-1 focus:outline-none' placeholder='update' />
                  <button
                    onClick={() => useUpdateDocument(movie, update, database)}
                    className='bg-black border-[1px] border-black hover:bg-white hover:text-black transition-all ease-in-out cursor-pointer text-white p-1 pl-2 pr-2 rounded'
                  >
                    Update
                  </button>
                </div>

                <button
                  onClick={() => useDelelteDocument(movie, database)}
                  className='bg-black border-[1px] border-black hover:bg-white hover:text-black transition-all ease-in-out cursor-pointer text-white p-1 pl-2 pr-2 rounded'
                >
                  Delete
                </button>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default room