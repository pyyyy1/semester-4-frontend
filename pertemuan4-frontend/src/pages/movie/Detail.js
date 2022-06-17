// Mengimport component
import { useEffect } from "react";
import { useParams } from "react-router-dom"; 
import axios from "axios";
import DetailMovie from "../../components/DetailMovie/index";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/movieSlice";

function Detail() {
  const params = useParams();

  // Membuat dispatch
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getDetail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  async function getDetail() {
    // Fetch data dari Axios
    const response = await axios(ENDPOINTS.DETAIL(params.id));

    // Menyimpan data ke dalam state movie
    dispatch(updateMovies(response.data.results));
  }

  return (
    <>
      <DetailMovie />
      <Movies title="Recommendations"/>     
      <h1>Testing</h1>  
    </>
    
  );
}

export default Detail