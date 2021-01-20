import React from "react";

function NumberForm({ numberReference, onSubmit = f => f}) {
    return (
        <form onSubmit={onSubmit}>
            <input ref={numberReference} type="number" placeholder="Writa a number" required/>
            <button>Add</button>
        </form>
    )
}

export default NumberForm;