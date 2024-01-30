
import { useState, useEffect } from 'react';

const useApi = (apiUrl: string) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          setData(result);
        } else {
          console.error('Erro na solicitação:', response.status);
        }
      } catch (error) {
        console.error('Erro na solicitação:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);



  return { data, loading };
};

export default useApi;



