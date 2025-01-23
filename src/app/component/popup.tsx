import React from 'react'

const popup = ({isi} : any) => {
  return (
    <div>
        {/* The button to open modal */}
        <label htmlFor="my_modal_6" className="btn">open modal</label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal" role="dialog">
            <div className="modal-box">
                {isi}
                <div className="modal-action">
                <label htmlFor="my_modal_6" className="btn">Close!</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default popup