Entrega 2 Proyecto Interfaces Humano Computador:  
Resumen
A partir de tres entrevistas realizadas a estudiantes que llegan en automóvil a San Joaquín, se identificó una dificultad en elegir y encontrar estacionamiento sin conocer la disponibilidad, bajo presión de tiempo y con distinta conveniencia según la ubicación de las clases. Proponemos “Estaciona UC”, un prototipo web que consulta escenarios de disponibilidad simulados, compara sectores por caminata estimada y ayuda a cambiar de alternativa si la primera está llena. Se formulan dos recorridos, siete decisiones fundamentales y tres tareas comprobables en la versión funcional. 

Hallazgos de la investigación
La investigación con los usuarios en la entrega anterior, permitió identificar tres temas y cuatro necesidades. Es importante identificarlas, ya que el trabajo que sigue se apoya en estos. Cabe notar que P1, P2 y P3 son las personas entrevistadas en la entrega anterior, por ende, los hallazgos son:
Buscar sin información provoca incertidumbre (H1): Esto se evidencia en las entrevistas cuando P1 dice “doy vueltas sin saber dónde ir tampoco” o cuando P3 dijo “Uno entra y prueba suerte”. La necesidad (N1) acá es conocer la disponibilidad por sector. 
Buscar compite con llegar a la hora a clases (H2): P1 relata 10 minutos de retraso y P2 dice haber buscado hasta 15 minutos. La necesidad (N2) es reducir la incertidumbre sobre el tiempo de búsqueda. 
Cercanía y urgencia condicionan la elección (H3): Se ve evidenciado al saber que P1 prioriza cercanía a clases y P3 espera en Ingeniería antes de trasladarse a Agronomía, ya que implica caminata extra. Las necesidades (N3 y N4) son detectar alternativas y considerar la cercanía. 

Las necesidades N1 a N4 traducen de cierta manera, la definición del problema visto en la primera entrega. 

Propuesta de Solución
A partir de los problemas y necesidades identificados en las entrevistas, proponemos Estaciona UC, una interfaz web dirigida a estudiantes que llegan en automóvil al campus San Joaquín y necesitan encontrar estacionamiento de manera más informada y eficiente.

La plataforma busca facilitar la decisión de dónde estacionarse, permitiendo consultar la disponibilidad de espacios en distintos sectores del campus, como Comercial, Ingeniería y Agronomía. Además, permite seleccionar el sector al que el estudiante necesita dirigirse para asistir a clases y comparar las alternativas de estacionamiento según su disponibilidad y el tiempo estimado de caminata hasta su destino. 

De esta manera, si el estacionamiento que el estudiante utiliza habitualmente se encuentra lleno, puede identificar otras opciones antes de comenzar a recorrer distintos sectores. Así, Estaciona UC busca disminuir la incertidumbre durante la búsqueda, evitar desplazamientos innecesarios y ayudar a los estudiantes a tomar decisiones considerando el tiempo que tienen disponible para llegar a sus clases. 

User journeys

Recorrido sin “Estaciona UC”:
Paso
Qué piensa
Qué siente
Incomodidad
1. Llega en auto cerca del inicio de clases 
“Me queda poco tiempo”
Urgencia
-
2. Entra primero al sector Comercial
“Es el sector más cómodo para mis clases”
Expectativa
-
3. Recorre Comercial y no encuentra cupo
“¿A dónde voy ahora?”
Incertidumbre
Sí - fuerte
4. Se dirige a Agronomía como segunda opción
“Ojalá haya un estacionamiento libre”
Tensión
Sí
5. Da vueltas hasta localizar un espacio
“No se cuanto me voy a demorar”
Frustración
Sí - fuerte
6. Camina a la sala y llega atrasada
“Perdí tiempo buscando”
Desánimo
Sí


Recorrido con “Estaciona UC”:
Paso
Que piensa
Que siente
Diseño que interviene
1. Abre la página al llegar a San Joaquín
“Tengo clases en unos minutos, necesito saber donde estacionarme”
Urgencia
D6
2. Consulta los estacionamientos del campus y observa cuales tienen espacios disponibles
“Comercial está lleno, mejor no pierdo tiempo buscando ahí”
Alivio
D1 y D6
3. Selecciona Comercial como destino de su clase y compara los estacionamientos según la cercanía
“Agronomía tiene espacios, pero ¿cuánto tendría que caminar?”
Evaluación
D2
4. Revisa las alternativas disponibles y compara la distancia
“Me conviene ir a Agronomía en vez de esperar en Comercial”
Seguridad
D3 y D4
5. Selecciona Agronomía y ve la ubicación para estacionarse
“Ya se a donde ir, no tengo que recorrer el sector”
Confianza
D5 y D7
6. Va a Agronomía y encuentra el espacio disponible para estacionar 
“Pude estacionarme sin dar vueltas por todo el campus”
Tranquilidad
–
7. Camina a clases 
“Pude elegir una alternativa considerando el tiempo que tenía para llegar”
Satisfacción
–


Decisiones de diseño
A partir de las necesidades identificadas en las entrevistas y los recorridos de los usuarios, se definieron siete decisiones de diseño para Estaciona UC. Cada una busca responder a una dificultad concreta de los estudiantes al momento de encontrar estacionamiento en el campus San Joaquín. Estas decisiones se justifican utilizando conceptos de interacción humano-computador y se relacionan con los hallazgos de la primera entrega.
Decisión 1 (D1): Mostrar la disponibilidad de estacionamientos por sector
Qué cambia: La interfaz principal de Estaciona UC muestra los distintos sectores de estacionamiento del campus, indicando la cantidad de espacios disponibles en cada uno. De esta manera, el estudiante puede identificar cuáles tienen cupos sin tener que ingresar individualmente a cada sector.
De dónde sale: Esta decisión responde al hallazgo H1 y a la necesidad N1, relacionados con la incertidumbre que genera no conocer la disponibilidad. P3 mencionó que actualmente “uno entra y prueba suerte”, mientras que P1 señaló que da vueltas sin saber dónde dirigirse. Esto demuestra la necesidad de contar con información antes de comenzar la búsqueda.
Qué concepto la explica: Se aplica la heurística de Nielsen de visibilidad del estado del sistema, ya que la interfaz muestra de forma clara la disponibilidad de cada estacionamiento. Esto también reduce el golfo de evaluación, porque el usuario puede interpretar rápidamente qué sectores presentan opciones para estacionarse, sin tener que descubrirlo recorriendo el campus.
Para quién: Beneficia principalmente a estudiantes como P1 y P3, que actualmente buscan estacionamiento sin saber dónde encontrarán espacios. Se relaciona con el paso 2 del recorrido con Estaciona UC, cuando la estudiante consulta la disponibilidad y descubre que Comercial está lleno.
Decisión 2 (D2): Permitir seleccionar el sector de destino de las clases
Qué cambia: Estaciona UC permite seleccionar el sector del campus al que el estudiante necesita dirigirse, por ejemplo, Comercial o Ingeniería. A partir de esta selección, la interfaz presenta los estacionamientos disponibles junto con su distancia estimada de caminata hasta el destino elegido.
De dónde sale: Esta decisión responde al hallazgo H3 y a la necesidad N4. En las entrevistas, P1 explicó que lo más importante para ella es estacionarse cerca de sus clases y que por eso suele comenzar buscando en Comercial. Por lo tanto, la ubicación de las actividades académicas influye directamente en la elección del estacionamiento.
Qué concepto la explica: Se relaciona con los modelos mentales y la correspondencia entre el sistema y el mundo real. Los estudiantes suelen pensar primero en el lugar donde tienen clases y después en dónde les conviene estacionarse. Al permitir seleccionar su destino académico, la interfaz organiza la información de acuerdo con esa forma de razonar, evitando que el estudiante deba calcular por su cuenta qué sectores le convienen.
Para quién: Es especialmente útil para estudiantes como P1, que priorizan la cercanía con sus clases. Se relaciona con el paso 3 del recorrido con Estaciona UC, cuando la estudiante selecciona Comercial como destino y revisa la cercanía de las alternativas.
Decisión 3 (D3): Permitir comparar los estacionamientos según disponibilidad y cercanía
Qué cambia: La interfaz permite ordenar los estacionamientos utilizando dos criterios: menor tiempo de caminata y mayor disponibilidad de espacios. Así, el estudiante puede comparar las alternativas y elegir la que mejor se ajuste a sus necesidades y al tiempo que tiene disponible.
De dónde sale: Esta decisión se relaciona con los hallazgos H2 y H3 y las necesidades N2 y N4. P3 explicó que en ocasiones prefiere esperar en Ingeniería antes que trasladarse a Agronomía, ya que este último sector puede significar aproximadamente diez minutos adicionales caminando. Esto demuestra que la elección depende tanto de la disponibilidad como de la cercanía.
Qué concepto la explica: Se aplica la heurística de Nielsen de control y libertad del usuario. En lugar de imponer una única alternativa como la mejor, el sistema permite cambiar el criterio de comparación. De esta manera, cada estudiante puede priorizar lo que considere más importante en ese momento, como caminar menos o encontrar un estacionamiento con mayor disponibilidad.
Para quién: Beneficia a estudiantes que deben decidir entre esperar un espacio cercano o dirigirse a otro sector, como P3. Se relaciona con el paso 4 del recorrido, cuando la estudiante compara las opciones y decide que le conviene dirigirse a Agronomía.
Decisión 4 (D4): Mostrar alternativas cuando el estacionamiento preferido está lleno
Qué cambia: Cuando el estudiante selecciona un sector que no tiene espacios disponibles, Estaciona UC permite consultar otras alternativas desde la misma pantalla. Estas opciones muestran su disponibilidad y tiempo estimado de caminata hacia el destino académico seleccionado, evitando que el usuario tenga que comenzar nuevamente la búsqueda.
De dónde sale: Esta decisión responde al hallazgo H3 y a la necesidad N3. P1 relató que comienza buscando en Comercial y, cuando no encuentra estacionamiento, se dirige hacia Agronomía. Asimismo, P3 señaló que suele esperar en Ingeniería antes de considerar otro sector. En ambos casos, encontrar una alternativa requiere tomar decisiones con información limitada.
Qué concepto la explica: Se utiliza la heurística de Nielsen de reconocimiento antes que recuerdo. Al presentar las alternativas directamente, la interfaz evita que el estudiante tenga que recordar qué otros sectores existen o comparar mentalmente sus características. Las opciones permanecen visibles y facilitan una decisión más rápida.
Para quién: Beneficia a estudiantes como P1 y P3, que necesitan encontrar una segunda opción cuando su estacionamiento habitual está lleno. Se relaciona con los pasos 4 y 5 del recorrido con Estaciona UC, cuando la estudiante identifica Agronomía como alternativa.
Decisión 5 (D5): Impedir seleccionar un estacionamiento que no tenga disponibilidad
Qué cambia: Cuando un sector aparece sin espacios disponibles, Estaciona UC deshabilita la opción de confirmar su elección y muestra un mensaje explicando que no hay cupos. Al mismo tiempo, permite consultar otros estacionamientos donde sí existen alternativas disponibles.
De dónde sale: Esta decisión responde al hallazgo H1 y a la necesidad N3. P1 y P3 explicaron que una de las dificultades de buscar estacionamiento es llegar a un sector y descubrir que está lleno. La interfaz busca evitar que el estudiante elija deliberadamente un sector que el sistema identifica como ocupado.
Qué concepto la explica: Se aplican las restricciones o constraints descritas por Norman y la heurística de Nielsen de prevención de errores. Al impedir seleccionar un sector sin disponibilidad, el sistema limita una acción que no corresponde con la información presentada y orienta al estudiante hacia alternativas que sí podría utilizar.
Para quién: Es útil para estudiantes que tienen poco tiempo para llegar a clases y necesitan evitar decisiones que puedan generar recorridos innecesarios. Se relaciona con el paso 5 del recorrido con Estaciona UC, cuando la estudiante selecciona Agronomía después de comprobar que Comercial está lleno.
Decisión 6 (D6): Presentar la información de forma clara y comprensible
Qué cambia: Estaciona UC organiza los sectores en tarjetas que presentan de manera visible el nombre del estacionamiento, su disponibilidad y la caminata estimada. Además, diferencia los sectores con cupos de aquellos que están completos, permitiendo interpretar rápidamente la información necesaria para tomar una decisión.
De dónde sale: Esta decisión responde a los hallazgos H1 y H2 y a las necesidades N1 y N2. P1 mencionó que da vueltas sin saber dónde dirigirse y relató haber llegado diez minutos tarde a clases. Por lo tanto, es importante que la información de la interfaz pueda comprenderse rápidamente, especialmente cuando el estudiante dispone de poco tiempo.
Qué concepto la explica: Se relaciona con la reducción de la carga de memoria y la heurística de Nielsen de reconocimiento antes que recuerdo. Al mostrar en una misma vista los datos relevantes, el estudiante no necesita recordar la disponibilidad de cada sector ni comparar información entre distintas pantallas. Esto facilita interpretar las alternativas.
Para quién. Beneficia a estudiantes que necesitan tomar decisiones rápidas antes de entrar al campus. Se refleja principalmente en los pasos 1, 2 y 3 del recorrido con Estaciona UC, donde la estudiante abre la interfaz, revisa las opciones y compara su conveniencia.
Decisión 7 (D7): Confirmar la elección del estacionamiento y entregar retroalimentación
Qué cambia: Una vez que el estudiante selecciona un estacionamiento con disponibilidad, Estaciona UC muestra un resumen de la elección realizada, incluyendo el sector seleccionado. Además, permite modificar o restablecer la elección si el estudiante decide considerar otra alternativa. Esta confirmación corresponde a una elección dentro de la interfaz y no constituye una reserva de estacionamiento.
De dónde sale: Esta decisión se relaciona con los hallazgos H2 y H3 y las necesidades N2 y N4. Los participantes señalaron que encontrar estacionamiento puede tomar más tiempo del esperado y afectar su llegada a clases. Contar con una elección clara permite organizar el siguiente paso de la búsqueda sin tener que volver a comparar todas las alternativas.
Qué concepto la explica: Se aplica el principio de feedback o retroalimentación de Norman, junto con la heurística de Nielsen de control y libertad del usuario. La interfaz informa el resultado de la acción realizada, permitiendo al estudiante comprobar qué sector eligió. Al mismo tiempo, ofrece la posibilidad de modificar esa decisión, evitando que una selección sea irreversible.
Para quién. Beneficia a estudiantes que deben decidir rápidamente dónde estacionarse, especialmente cuando su primera alternativa no está disponible. Se relaciona con el paso 5 del recorrido, cuando la estudiante selecciona Agronomía y confirma su elección antes de dirigirse hacia ese sector.

