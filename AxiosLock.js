import axios from 'axios';
import UI from 'lockui';

export default function AxiosLock(config, then, error, final){
    then = then || new Function
    error = error || new Function
    final = final || new Function
    UI.lock();
    axios(config)
    .then(res=>{
      then(res.data)
    }).catch(err=>{
      error(err)
    }).finally(()=>{
        final()
      UI.unlock()
    })
  }