import Swal from "sweetalert2";
import storage from "../Storage/storage";

export const show_alerta = (msj,icon)=>{
    Swal.fire({title:msj, icon:icon, buttonsStyling:true});
}

export const senRequest = async(method,params,url,redir='',token=true)=>{
    if(token){
        const authToken = storage.get('authToken');
        axios.defaults.headers.common['Authorization'] = 'Bearer '+authToken; 
    }
    let res;
    await axios({method:method,url:url, data:params}).then(
        response => {
            res =response.data,
            (method != 'GET') ? show_alerta(response.data.message,'success'):'',
            setTimeout( () =>
                (redir !=='') ? window.location.href = redir : '',2000
            )
        }).catch((errors) =>{
            let desc='';
            res = errors.response.data;
            errors.response.data.errors.map( (e) => {desc = desc + ' ' + e})
            show_alerta(desc,error)
        });
        return res;

}

export const confirmation = async(name,url,redir)=>{
    const alert =Swal.mixin({buttonsStyling:true});
    alert.fire({
        title:'Are you sure delete' +name+'?',
        icon:'question',showCanceButton:true,
        confirmButtonText: '<i class="fa solid fa-check"></i> Yes,delete',
        confirmButtonText: '<i class="fa solid fa-ban"></i> Cancel'
    }).then((result) =>{
        if(result.isConfirmed){
            sendRequest('DELETE',{},url,redir);
        }
    });
}