{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function updateTime() \{\
    const now = new Date();\
    const dateOptions = \{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' \};\
    const timeOptions = \{ hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false, timeZone: 'America/New_York' \};\
    const dateString = now.toLocaleDateString('en-US', dateOptions);\
    const timeString = now.toLocaleTimeString('en-US', timeOptions);\
    document.getElementById('date-time').textContent = dateString + " " + timeString + " EST"; // Displaying date, time, and timezone\
\}\
\
// Update time every second\
setInterval(updateTime, 1000);\
\
// Initial call to display time immediately\
updateTime();\
}