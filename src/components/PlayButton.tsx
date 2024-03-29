export default function PlayButton({isPlaying, classname}: {isPlaying: boolean, classname?: string}) {
    if (isPlaying == true) {
        return(
            <>
                <svg className={classname} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </>
        )
    }

    else {
        return(
            <>
                <svg className={classname} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4"/><rect width="4" height="16" x="14" y="4"/></svg>
            </>
        )
    }


}