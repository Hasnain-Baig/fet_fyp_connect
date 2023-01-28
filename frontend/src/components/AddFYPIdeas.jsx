import React from 'react';


function AddFYPIdeas() {
  return (
    <div className='text-light bg-color-modal'>
   <div className="modal fade" id="AddFYPIdeas" tabindex="-1" aria-labelledby="AddFYPLabel" aria-hidden="true">
  <div className="modal-dialog bg-color-modal   ">
    <div className="modal-content  bg-color-modal">
      <div className="modal-header  ">
        <h3 className="modal-title" id="exampleModalLabel">ADD FYP IDEA</h3>
        <p className='text-light fs-4 mt-3' role='button' data-bs-dismiss="modal">X</p>
        {/* <button type="button" class="text-light bg-danger px-2 border-rounded-2" data-bs-dismiss="modal" >X</button> */}
    
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label for="text" className="form-label">Title</label>
            <input type="text" className="form-control" id="" aria-describedby="emailHelp"/>
           
          </div>
          
          <div className="mb-3">
            <label for="text" className="form-label">Technology</label>
            <input type="text" className="form-control" id="" aria-describedby=""/>
           
          </div>

          <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className='d-flex justify-content-end'>
<button type="submit" className="btn btn-success">Add FYP ideas </button>
</div>
        </form>
      </div>
    </div>
  </div>
</div>



</div>




  );
}

export default  AddFYPIdeas;



