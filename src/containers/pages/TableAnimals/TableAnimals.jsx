import React, {Component} from 'react';
import {db} from '../../../config/firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

function TableAnimals() {

  /* function to add new animals to firestore */
const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    await addDoc(collection(db, 'animals'), {
      id: id,
      nama: nama,
      description: description,
      jumlah : jumlah,
      species: species,
      created: Timestamp.now()
    })
    onClose()
  } catch (err) {
    alert(err)
  }
}



  return(
     <div>
       <p>Table Animals</p>
        <section className="contact" id="contact">
          <h2 className="heading">FORM SUBMIT</h2>
          <form onSubmit={handleSubmit} className='addAnimals' name='addAnimals'>
            <div className="inputBox">
              <input type="text" placeholder="nama" />
            </div>
            <div className="inputBox">
              <input type="text" placeholder="spesies" />
            </div>
            <div className="inputBox">
              <input type="number" placeholder="jumlah" />
            </div>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="deskripsi"
              defaultValue={""}
            />
            {/* <div className="file-upload">
              <button className="file-upload-btn" type="button">
                Add Image
              </button>
              <div className="image-upload-wrap">
                <input className="file-upload-input" type="file" accept="image/*" />
              </div>
              <div className="file-upload-content">
                <img className="file-upload-image" src="#" alt="your image" />
                <div className="image-title-wrap">
                  <button type="button" className="remove-image">
                    Remove <span className="image-title">Uploaded Image</span>
                  </button>
                </div>
              </div>
            </div> */}
            <a href="#" className="btn">
              Submit
            </a>
          </form>
        </section>

       <button>Go To Landing Page</button>
       <button>Go To Table Animals</button>
     </div>
  )
}

export default TableAnimals;