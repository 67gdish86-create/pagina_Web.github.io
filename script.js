const questions = [
    // 🌄 Cultura Tiahuanaco
    {
        question: "¿La cultura Tiahuanaco se desarrolló cerca del lago Titicaca?",
        options: ["Sí", "No", "Cerca del mar", "En la selva"],
        correct: 0
    },
    {
        question: "¿La cultura Tiahuanaco construyó grandes edificios de piedra?",
        options: ["No, construyeron de madera", "Sí", "Solo casas pequeñas", "No construyeron nada"],
        correct: 1
    },
    
    // 🛣️ Educación vial
    {
        question: "¿Para qué sirve el semáforo?",
        options: [
            "Para decorar la calle",
            "Para dar luz en la noche",
            "Para ordenar el tráfico",
            "Para hacer música"
        ],
        correct: 2
    },
    {
        question: "¿Qué color del semáforo significa 'detente'?",
        options: ["Verde", "Amarillo", "Rojo", "Azul"],
        correct: 2
    },
    
    // 🌳 La Selva
    {
        question: "¿La selva es un lugar con muchos árboles o con nieve?",
        options: ["Con nieve", "Con muchos árboles", "Sin plantas", "Solo rocas"],
        correct: 1
    },
    {
        question: "¿Qué animal puede vivir en la selva: mono o pingüino?",
        options: ["Pingüino", "Mono", "Oso polar", "Foca"],
        correct: 1
    },
    
    // 🏺 Cultura Caral
    {
        question: "¿Caral fue una de las culturas más antiguas del Perú?",
        options: ["No", "Sí", "Fue la más reciente", "No existió"],
        correct: 1
    },
    {
        question: "¿En Caral se construyeron pirámides de piedra?",
        options: ["No, solo casas", "Sí", "Construyeron iglesias", "No construyeron nada"],
        correct: 1
    },
    
    // 🗿 Cultura Chavín
    {
        question: "¿La cultura Chavín se destacó por su arte en piedra?",
        options: ["No", "Sí", "Por la pintura", "Por la música"],
        correct: 1
    },
    {
        question: "¿El Lanzón es una escultura de la cultura Chavín?",
        options: ["No", "Sí", "Es de los incas", "No existe"],
        correct: 1
    },
    
    // 🎨 Cultura Paracas
    {
        question: "¿La cultura Paracas es famosa por sus tejidos?",
        options: ["No", "Sí", "Por sus vasijas", "Por sus casas"],
        correct: 1
    },
    {
        question: "¿Paracas vivió cerca del mar?",
        options: ["No, en la sierra", "Sí", "En la selva", "En el desierto lejos del mar"],
        correct: 1
    },
    
    // 🏺 Cultura Mochica (Moche)
    {
        question: "¿Los mochicas hicieron huacos (cerámicas)?",
        options: ["No", "Sí", "Solo herramientas", "Solo armas"],
        correct: 1
    },
    {
        question: "¿La cultura Mochica vivió en la costa del Perú?",
        options: ["No, en la sierra", "Sí", "En la selva", "No vivieron en Perú"],
        correct: 1
    },
    
    // ⚓ Combate de Angamos
    {
        question: "¿El Combate de Angamos fue una batalla en el mar?",
        options: ["No, en tierra", "Sí", "En el aire", "En las montañas"],
        correct: 1
    },
    {
        question: "¿Miguel Grau participó en el Combate de Angamos?",
        options: ["No", "Sí", "Fue Bolognesi", "Fue San Martín"],
        correct: 1
    },
    
    // 🌀 Cultura Nazca
    {
        question: "¿Las Líneas de Nazca se ven mejor desde el cielo?",
        options: ["No", "Sí", "Solo desde el suelo", "No se pueden ver"],
        correct: 1
    },
    {
        question: "¿Las Líneas de Nazca tienen formas de animales?",
        options: ["No", "Sí", "Solo círculos", "Solo líneas rectas"],
        correct: 1
    },
    
    // 🏰 Cultura Chimú
    {
        question: "¿Chan Chan fue una ciudad de la cultura Chimú?",
        options: ["No", "Sí", "Fue de los incas", "Fue de Chavín"],
        correct: 1
    },
    {
        question: "¿Los Chimú vivieron en la costa norte del Perú?",
        options: ["No, en el sur", "Sí", "En la selva", "En las montañas"],
        correct: 1
    },
    
    // 📖 Leyendas Peruanas
    {
        question: "¿Las leyendas son historias reales o imaginarias?",
        options: ["Reales", "Imaginarias", "Solo mentiras", "Documentales"],
        correct: 1
    },
    {
        question: "¿Las leyendas se cuentan de generación en generación?",
        options: ["No", "Sí", "Solo se escriben", "Nadie las cuenta"],
        correct: 1
    },
    
    // 🌞 El origen de los incas
    {
        question: "¿Manco Cápac y Mama Ocllo fundaron el Imperio Inca?",
        options: ["No", "Sí", "Fue Atahualpa", "Fue Pizarro"],
        correct: 1
    },
    {
        question: "¿Los incas creían que venían del Sol?",
        options: ["No", "Sí", "De la Luna", "De las estrellas"],
        correct: 1
    },
    
    // 🏔️ El Imperio Incaico
    {
        question: "¿El Imperio Incaico fue muy grande?",
        options: ["No", "Sí", "Era muy pequeño", "Solo tenía una ciudad"],
        correct: 1
    },
    {
        question: "¿Cusco fue la capital del Imperio Incaico?",
        options: ["No", "Sí", "Fue Lima", "Fue Arequipa"],
        correct: 1
    },
    
    // 👨‍👩‍👧 Organización social del Imperio Incaico
    {
        question: "¿El Inca era el jefe del imperio?",
        options: ["No", "Sí", "Era un soldado", "Era un campesino"],
        correct: 1
    },
    {
        question: "¿Todos ayudaban trabajando para el imperio?",
        options: ["No", "Sí", "Solo el Inca trabajaba", "Nadie trabajaba"],
        correct: 1
    },
    
    // 🌾 Organización económica del Imperio Incaico
    {
        question: "¿Los incas sembraban papas y maíz?",
        options: ["No", "Sí", "Solo pescaban", "No sembraban nada"],
        correct: 1
    },
    {
        question: "¿El trueque era cambiar cosas sin usar dinero?",
        options: ["No", "Sí", "Era usar monedas", "Era robar"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion() {
    const q = questions[currentQuestion];
    
    document.getElementById('question').textContent = q.question;
    document.getElementById('current').textContent = currentQuestion + 1;
    document.getElementById('total').textContent = questions.length;
    
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    q.options.forEach((option, index) => {
        const btn = document.createElement('div');
        btn.className = 'option';
        btn.textContent = option;
        btn.onclick = () => selectOption(index);
        optionsDiv.appendChild(btn);
    });
    
    document.getElementById('nextBtn').style.display = 'none';
    answered = false;
}

function selectOption(index) {
    if (answered) return;
    
    answered = true;
    const q = questions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    options.forEach(opt => opt.classList.add('disabled'));
    
    if (index === q.correct) {
        options[index].classList.add('correct');
        score++;
    } else {
        options[index].classList.add('incorrect');
        options[q.correct].classList.add('correct');
    }
    
    document.getElementById('nextBtn').style.display = 'block';
}

document.getElementById('nextBtn').onclick = () => {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
};

function showResults() {
    document.getElementById('quizContent').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    
    document.getElementById('scoreNumber').textContent = score;
    
    const percentage = (score / questions.length) * 100;
    let message = '';
    
    if (percentage === 100) {
        message = '🏆 ¡Perfecto! Dominas la historia del Perú';
    } else if (percentage >= 80) {
        message = '🌟 ¡Excelente! Tienes grandes conocimientos';
    } else if (percentage >= 60) {
        message = '👍 ¡Bien hecho! Buen conocimiento histórico';
    } else if (percentage >= 40) {
        message = '📚 ¡Sigue estudiando! Vas por buen camino';
    } else {
        message = '💪 ¡Ánimo! Practica más sobre historia peruana';
    }
    
    document.getElementById('scoreMessage').textContent = message;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('quizContent').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    loadQuestion();
}

loadQuestion();
