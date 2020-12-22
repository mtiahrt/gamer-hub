export const fadeIn = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: .75
        },
        exit: {
            opacity: 0,
            transition: {
                duration: .75
            },
        }
    }
}

export const popOut = {
    hidden: {
        opacity: 0,
        scale: .5,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: .75
        },
        exit: {
            opacity: 0,
            transition: {
                duration: .75
            },
        }
    }
}