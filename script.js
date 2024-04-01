// Seleciona os elementos HTML com os IDs 'horas', 'minutos' e 'segundos' e os armazena em variáveis
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

// Define uma função setInterval para atualizar o relógio a cada segundo
const relogio = setInterval(function time() {
  // Obtém a data e hora atual
  let dateToday = new Date()

  // Obtém as horas, minutos e segundos da data atual
  let hr = dateToday.getHours()
  let min = dateToday.getMinutes()
  let s = dateToday.getSeconds()

  // Adiciona um zero à esquerda se as horas, minutos ou segundos forem menores que 10
  if (hr < 10) hr = '0' + hr
  if (min < 10) min = '0' + min
  if (s < 10) s = '0' + s

  // Atualiza o conteúdo dos elementos HTML com as horas, minutos e segundos atuais
  horas.textContent = hr
  minutos.textContent = min
  segundos.textContent = s

  // A função setInterval será executada a cada segundo (1000 milissegundos)
  // Isso garante que o relógio seja atualizado a cada segundo
}, 1000)
