const {S3}=require('aws-sdk');

exports.s3Uploadv2 = async(name,file)=>{
console.log("upload s3------>",file);
console.log("upload s3------>",name);
// re

    const s3=new S3({
        secretAccessKey:'oMX4ikzsjzoKsB5AFOQBNoyxAvBUeeSwsrXz201B',
        accessKeyId:'AKIAXR7MYVV5HOCBNPMM',
    });
    
    const param={
        Bucket:'aws-s3-fet-fyp-connect-bucket',
        Body:file.buffer

    };
if(file.fieldname=='thesisFile'){
        param.Key=`uploads/thesis/${name}`;
}else if(file.fieldname=='proposalFile'){
        param.Key=`uploads/proposals/${name}`;
}
    return await s3.upload(param).promise();
}

