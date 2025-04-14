function unload(){
    var fileinput=document.getElementById('fileInput');
    var file=fileinput.file[0];

    if(file){
        var formData=new FormData();
        formData.append('file',file);
        var xhr=new XMLHttpRequestEventTarget();
        xhr.open('post','/unload',true);
        xhr.onload =function(){
            if(xhr.ststus=200){

                alert('file uploaded successfully!')
            }
            else{
                alert('file upload failed');
            }
        };
        xhr.senf(formData);
    }else{
        alert('please select a file to upload.');
    }
}