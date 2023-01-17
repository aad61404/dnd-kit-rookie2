import * as React from 'react';
// import "./App.css"

function App() {
    const [fruitItems, setFruitItems] = React.useState([
        "Apple",
        "Banana",
        "Orange",
    ])
    const [newFruitItem, setNewFruitItem] = React.useState("")

    //save reference for dragItem and dragOverItem
    const dragItem = React.useRef<any>(null)
    const dragOverItem = React.useRef<any>(null)

    //const handle drag sorting
    const handleSort = () => {
        //duplicate items
        let _fruitItems = [...fruitItems]

        //remove and save the dragged item content
        const draggedItemContent = _fruitItems.splice(dragItem.current, 1)[0]

        //switch the position
        _fruitItems.splice(dragOverItem.current, 0, draggedItemContent)

        //reset the position ref
        dragItem.current = null
        dragOverItem.current = null

        //update the actual array
        setFruitItems(_fruitItems)
    }

    //handle name change
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewFruitItem(e.target.value)
    }

    //handle new item addition
    const handleAddItem = () => {
        const _fruitItems = [...fruitItems]
        _fruitItems.push(newFruitItem)
        setFruitItems(_fruitItems)
    }

    return (
        <div className="app">
            <h2>Fruit List</h2>
            <div className="input-group">
                <input
                    type="text"
                    name="fruitName"
                    placeholder="e.g Banana"
                    onChange={handleNameChange}
                />
                <button className="btn" onClick={handleAddItem}>
                    Add item
                </button>
            </div>

            {/** List container //TODO break into component */}
            <div className="list-container">
                {fruitItems.map((item, index) => (
                    <div
                        key={index}
                        className="list-item"
                        draggable
                        onDragStart={(e) => {
                            console.log("🚀 ~ file: App.tsx:72 ~ App ~ index", index)
                            return (dragItem.current = index)
                        }}
                        onDragEnter={(e) => {
                            console.log("🚀 ~ file: App.tsx:75 ~ App ~ index", index)
                            return (dragOverItem.current = index)
                        }}
                        onDragEnd={handleSort}
                        onDragOver={(e) => e.preventDefault()}
                        onTouchStart={(e) => {
                          console.log("🚀 ~ file: App.tsx:81 ~ App ~ index", index)
                          return (dragItem.current = index)
                        }}
                        onTouchMove={(e) => {
                          console.log('e target', e.target)
                          console.log("🚀 ~ file: App.tsx:84 ~ App ~ index", index)
                          // return (dragItem.current = index)
                        }}
                        onTouchMoveCapture={(e) => {
                          console.log('e',e)
                        }}
                        onTouchEnd={(e)=> {
                          console.log("🚀 ~ file: App.tsx:91 ~ App ~ e", e)
                          console.log("🚀 ~ file: App.tsx:85 ~ App ~ index", index)
                          return (dragItem.current = index)
                        }}
                        >
                        <i className="fa-solid fa-bars"></i>
                        <h3>{item}</h3>
                    </div>
                ))}
                        console.log("🚀 ~ file: App.tsx:99 ~ App ~ e", e)
            </div>
        </div>
    )
}

export default App