<script>
  import { onMount } from 'svelte';

  export let info_text = "";

  let welcome_list = [
    "i mirëpritur",
    "ongietorri",
    "дабро запрашаем",
    "dobrodošli",
    "добре дошли",
    "benvinguda",
    "Dobrodošli",
    "Vítejte",
    "Velkommen",
    "Welkom",
    "Tere tulemast",
    "Tervetuloa",
    "Bienvenue",
    "Benvido",
    "herzlich willkommen",
    "καλως ΗΡΘΑΤΕ",
    "Üdvözöljük",
    "velkominn",
    "fáilte",
    "benvenuto",
    "gaidīts",
    "laukiamas",
    "добредојден",
    "merħba",
    "Velkommen",
    "Witamy",
    "bem vind@",
    "Bine ati venit",
    "добро пожаловать",
    "Добродошли",
    "vitajte",
    "dobrodošli",
    "Bienvenido",
    "Välkommen",
    "ласкаво просимо",
    "croeso",
    "ողջույն",
    "xoş",
    "স্বাগত",
    "欢迎",
    "歡迎",
    "მისასალმებელი",
    "સ્વાગત",
    "स्वागत हे",
    "Zoo siab txais tos",
    "ようこそ",
    "ಸ್ವಾಗತಾರ್ಹ",
    "Қош келдіңіздер",
    "ស្វាគមន៍",
    "환영",
    "ຍິນດີຕ້ອນຮັບ",
    "സ്വാഗതം",
    "आपले स्वागत आहे",
    "тавтай морилно уу",
    "ကြိုဆို",
    "स्वागत",
    "පිළිගැනීමේ",
    "хуш омадед",
    "வரவேற்பு",
    "స్వాగత",
    "ยินดีต้อนรับ",
    "Hoşgeldiniz",
    "خوش آمدید",
    "Xush kelibsiz",
    "Chào mừng",
    "أهلا بك",
    "ברוך הבא",
    "خوش آمدی",
    "welkom",
    "olandiridwa",
    "barka",
    "welcome",
    "amohelehile",
    "soo dhaweyn",
    "karibu",
    "welcome",
    "wamukelekile",
    "welcome",
    "maligayang pagdating",
    "SELAMAT DATANG",
    "sambutan",
    "tonga soa",
    "selamat datang",
    "nau mai",
    "bonvenon",
    "Creole	akeyi",
    "gratissimum",
  ];

  let welcome = "welcome";

  onMount(() => {
		const interval = setInterval(() => {
      welcome = welcome_list[Math.floor(Math.random() * welcome_list.length)];
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<style>

  div {
    text-align: center;
    padding: 10px;
  }

  p {
    font-size: 1.2em;
    color: #680578;
  }

  h1 {
    font-family: 'Balsamiq Sans', cursive;
    font-size: 2em;
  }

  .info_text {
    color: black;
  }

  @media (min-width: 1000px) {
  }
</style>

<div>
  <p>{welcome} to </p>
  <h1>Shiryel's Blog</h1>
  <p class="info_text">{info_text}</p>
  <span>This is just a place where I put some reminders for myself, but maybe you find something useful</span>
</div>
