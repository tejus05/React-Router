import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';


export default function Github() {
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch('https://api.github.com/users/tejus05')
  //     .then(res => res.json())
  //     .then(data => setData(data));
  // },[]);

  const data = useLoaderData();
  return (
    <div>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl"> Github Followers : {data.followers}
      <div className='my-10 w-full flex justify-center'>
        <img className='h-52' src={data.avatar_url} alt="" />
      </div>
      </div>
    </div>
  )
}

export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/tejus05');
  const data = await res.json();
  return data;
}