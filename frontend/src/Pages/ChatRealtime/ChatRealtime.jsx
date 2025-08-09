import React from 'react'
import cpp from '../../assets/C++_Logo.png'
import java from '../../assets/java.png'
import chat from '../../assets/chat-java-c++.png'
import './ChatRealTime.css'

const ChatRealtime = () => {
    return (
        <div className='project'>
            <h2>Chat en tiempo real</h2>
            <p>Un chat con una interfaz en Java que lanza un servidor en C++ para comunicar en red dos ventanas.</p>
            <div className='stack-chat-realtime'>
                <img className="java" src={java} />
                <img className="cpp" src={cpp} />
            </div>
            <img className='chat' src={chat} />
        </div>
    )
}

export default ChatRealtime
