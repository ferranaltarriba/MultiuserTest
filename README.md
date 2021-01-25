He trobat aquest tutorial amb socketio.
https://livecodestream.dev/post/a-starter-guide-to-building-real-time-applications-with-nodejs/


L'he desplegat a la url de heroku. https://blooming-mountain-15098.herokuapp.com/ 
Es poden carregar fitxers del public, tant estils css com js, imatges segurament tambe.

El fitxer `public/js/chatroom.js`  es la part de clientSide, i el fitxer `app.js` es la part del servidor. 
Si llegeixes un xic el codi, chatroom fa un emit de 'new_message' i app fa un, on 'new_message' i fa una altra cosa. 

Per executar-ho en local, has de canviar la linia numero 2, del fitxer `public/js/chatroom.js` 
`let socket = io.connect('https://blooming-mountain-15098.herokuapp.com')`
a
`let socket = io.connect('http://localhost:3000')`

Segur que hi ha la manera per fer-ho pero no he trobat com ara. 


Prova-ho i ho parlem. Jo crec que amb aquesta base pots treballar amb local i despres pujar-ho. 
Quan obris l'aplicacio, has de fer un `npm install` per instalar dependencies i despres `npm start` i executara servidor a localhost:3000. 