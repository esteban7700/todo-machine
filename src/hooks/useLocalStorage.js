import React from 'react'

function useLocalStorage(key, initialValue) {

    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
    const [item, setItem] = React.useState(initialValue)

    React.useEffect(
        () => {
            setTimeout(
                () => {

                    try {
                        const localStorgeItem = window.localStorage.getItem(key)
                        
                        if (!localStorgeItem) {
                            window.localStorage.setItem(key, JSON.stringify(initialValue))
                        } else {
                            setItem(JSON.parse(localStorgeItem))
                        }
                        setLoading(false)
                    } catch (e) {
                        setLoading(false)
                        setError(true)
                    }
                }, 1000
            )
        }, [key, initialValue]
    )

    const persistItem = (newItem) => {
        window.localStorage.setItem(key, JSON.stringify(newItem))
        setItem(newItem)
    }

    return {
        item,
        persistItem,
        loading,
        error
    }
}

export { useLocalStorage }
