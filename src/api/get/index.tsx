import { useState, useEffect } from 'react';
import { getUserLocalStorage } from '../../context/AuthProvider/util';
import { api } from '../../modules/global/services/api';

const useApi = (apiUrl: string, param?: string) => {
  const [data, setData] = useState(); // Inicializado como null ou um valor padrão apropriado
  const [loading, setLoading] = useState(true);
  const auth = getUserLocalStorage();

  const apiUrlModifier = apiUrl + (param !== undefined && param !== null ? `/${param}` : '');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        };

        const response = await api.get(apiUrlModifier, config);
        setData(response.data);
      } catch (error) {
        // Trate os erros aqui, por exemplo, definindo um estado de erro
        console.error('Erro na requisição API:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrlModifier, auth?.token]);

  return { data, loading };
};

export default useApi;
