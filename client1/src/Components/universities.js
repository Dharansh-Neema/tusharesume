const universities = [
    "Indian Institute of Technology Bombay",
    "Indian Institute of Technology Delhi",
    "Indian Institute of Technology Madras",
    "Indian Institute of Technology Kharagpur",
    "Indian Institute of Technology Kanpur",
    "Indian Institute of Technology Guwahati",
    "Indian Institute of Technology Roorkee",
    "Indian Institute of Technology Bhubaneswar",
    "Indian Institute of Technology Gandhinagar",
    "Indian Institute of Technology Hyderabad",
    "Indian Institute of Technology Indore",
    "Indian Institute of Technology Jodhpur",
    "Indian Institute of Technology Patna",
    "Indian Institute of Technology Ropar",
    "Indian Institute of Technology Mandi",
    "Indian Institute of Technology (BHU) Varanasi",
    "Indian Institute of Technology Palakkad",
    "Indian Institute of Technology Tirupati",
    "Indian Institute of Technology Dhanbad",
    "Indian Institute of Technology Bhilai",
    "Indian Institute of Technology Goa",
    "Indian Institute of Technology Jammu",
    "Indian Institute of Technology Dharwad",
    "Indian Institute of Technology (ISM) Dhanbad",
    "Indian Institute of Science Bangalore",
    "Jawaharlal Nehru University",
    "Banaras Hindu University",
    "University of Delhi",
    "University of Calcutta",
    "University of Mumbai",
    "University of Madras",
    "University of Pune",
    "University of Hyderabad",
    "University of Mysore",
    "University of Calicut",
    "University of Rajasthan",
    "University of Lucknow",
    "University of Allahabad",
    "University of Madras",
    "University of Kolkata",
    "University of Bangalore",
    "University of Jammu",
    "University of Patna",
    "University of Kerala",
    "University of Gujarat",
    "University of Cochin",
    "University of Goa",
    "University of Bhopal",
    "University of Nagpur",
    "University of Jaipur",
    "University of Varanasi",
    "University of Ahmedabad",
    "University of Chandigarh",
    "University of Dehradun",
    "University of Shillong",
    "University of Agartala",
    "University of Agra",
    "University of Ajmer",
    "University of Aligarh",
    "University of Amaravati",
    "University of Amravati",
    "University of Amritsar",
    "University of Anand",
    "University of Asansol",
    "University of Aurangabad",
    "University of Bareilly",
    "University of Belgaum",
    "University of Bhagalpur",
    "University of Bhubaneswar",
    "University of Bidar",
    "University of Bijapur",
    "University of Bilaspur",
    "University of Bokaro",
    "University of Burdwan",
    "University of Calicut",
    "University of Cooch Behar",
    "University of Cuttack",
    "University of Darbhanga",
    "University of Davangere",
    "University of Dehradun",
    "University of Delhi",
    "University of Dhanbad",
    "University of Dibrugarh",
    "University of Dimapur",
    "University of Durgapur",
    "University of Faridabad",
    "University of Gandhinagar",
    "University of Gangtok",
    "University of Gaya",
    "University of Ghaziabad",
    "University of Gorakhpur",
    "University of Guntur",
    "University of Gurgaon",
    "University of Guwahati",
    "University of Gwalior",
    "University of Haldia",
    "University of Hamirpur",
    "University of Haridwar",
    "University of Hisar",
    "University of Hoshiarpur",
    "University of Howrah",
    "University of Hubli",
    "University of Imphal",
    "University of Indore",
    "University of Itanagar",
    "University of Jabalpur",
    "University of Jalandhar",
    "University of Jalgaon",
    "University of Jalna",
    "University of Jammu",
    "University of Jamnagar",
    "University of Jamshedpur",
    "University of Jhansi",
    "University of Jodhpur",
    "University of Junagadh",
    "University of Kakinada",
    "University of Kannur",
    "University of Kanpur",
    "University of Kapurthala",
    "University of Karaikudi",
    "University of Karimnagar",
    "University of Karnal",
    "University of Kasaragod",
    "University of Kavaratti",
    "University of Kharagpur",
    "University of Kochi",
    "University of Kohima",
    "University of Kolhapur",
    "University of Kolkata",
    "University of Kollam",
    "University of Kota",
    "University of Kozhikode",
    "University of Krishna",
    "University of Kullu",
    "University of Kurnool",
    "University of Kurukshetra",
    "University of Latur",
    "University of Lucknow",
    "University of Ludhiana",
    "University of Madurai",
    "University of Mahbubnagar",
    "University of Maldah",
    "University of Mathura",
    "University of Meerut",
    "University of Midnapore",
    "University of Moradabad",
    "University of Mumbai",
    "University of Muzaffarnagar",
    "University of Muzaffarpur",
    "University of Mysore",
    "University of Nagercoil",
    "University of Nagpur",
    "University of Nanded",
    "University of Narnaul",
    "University of Nashik",
    "University of Navi Mumbai",
    "University of Nellore",
    "University of New Delhi",
    "University of Nizamabad",
    "University of Noida",
    "University of Ongole",
    "University of Osmanabad",
    "University of Palakkad",
    "University of Panchkula",
    "University of Panipat",
    "University of Panvel",
    "University of Pathanamthitta",
    "University of Patiala",
    "University of Patna",
    "University of Pilani",
    "University of Pimpri-Chinchwad",
    "University of Port Blair",
    "University of Puducherry",
    "University of Pune",
    "University of Purnea",
    "University of Raichur",
    "University of Raigad",
    "University of Raipur",
    "University of Rajahmundry",
    "University of Rajkot",
    "University of Ramagundam",
    "University of Ranchi",
    "University of Ranga Reddy",
    "University of Ratlam",
    "University of Ratnagiri",
    "University of Rewa",
    "University of Rewari",
    "University of Rohtak",
    "University of Roorkee",
    "University of Rourkela",
    "University of Sagar",
    "University of Saharanpur",
    "University of Salem",
    "University of Sangli",
    "University of Sangrur",
    "University of Satara",
    "University of Satna",
    "University of Shillong",
    "University of Shimla",
    "University of Shimoga",
    "University of Sikar",
    "University of Silchar",
    "University of Siliguri",
    "University of Sirsa",
    "University of Sitapur",
    "University of Sivakasi",
    "University of Solan",
    "University of Solapur",
    "University of Sonipat",
    "University of Srinagar",
    "University of Sultanpur",
    "University of Surat",
    "University of Surendranagar",
    "University of Tajpur",
    "University of Tamluk",
    "University of Tanjore",
    "University of Tarn Taran",
    "University of Tinsukia",
    "University of Tiruchirappalli",
    "University of Tirunelveli",
    "University of Tirupati",
    "University of Udaipur",
    "University of Udupi",
    "University of Ujjain",
    "University of Unnao",
    "University of Vadodara",
    "University of Valsad",
    "University of Varanasi",
    "University of Vasai-Virar",
    "University of Vijayawada",
    "University of Villupuram",
    "University of Virar",
    "University of Virudhunagar",
    "University of Visakhapatnam",
    "University of Vizianagaram",
    "University of Warangal",
    "University of Wardha",
    "University of Yamunanagar",
    "University of Yavatmal",
    "University of Zirakpur",
    "Graphic Era University",
    "University of Delhi",
  "University of Mumbai",
  "University of Calcutta",
  "University of Madras",
  "University of Lucknow",
  "Banaras Hindu University",
  "Aligarh Muslim University",
  "University of Pune",
  "University of Hyderabad",
  "Jawaharlal Nehru University",
  "University of Rajasthan",
  "University of Kerala",
  "University of Mysore",
  "University of Allahabad",
  "University of Madurai",
  "University of Jammu",
  "Andhra University",
  "University of Guwahati",
  "Punjab University",
  "University of Patna",
  "University of Jodhpur",
  "Osmania University",
  "University of Burdwan",
  "Gujarat University",
  "University of Baroda",
  "Barkatullah University",
  "Kakatiya University",
  "Kurukshetra University",
  "University of Cochin",
  "Goa University",
  "University of Jhansi",
  "Panjab University",
  "Sambalpur University",
  "University of Kalyani",
  "Mangalore University",
  "University of Kashmir",
  "Nagpur University",
  "Mysore University",
  "University of North Bengal",
  "Ranchi University",
  "Tamil Nadu Agricultural University",
  "Tamil Nadu Veterinary and Animal Sciences University",
  "Annamalai University",
  "University of Madras",
  "University of Calicut",
  "University of Kerala",
  "Maharshi Dayanand University",
  "Guru Nanak Dev University",
  "Assam University",
  "Gauhati University",
  "Manipur University",
  "Mizoram University",
  "Nagaland University",
  "Sikkim University",
  "Tripura University",
  "Kumaun University",
  "Hemwati Nandan Bahuguna Garhwal University",
  "Uttaranchal Sanskrit University",
  "University of Roorkee",
  "University of Srinagar",
  "North-Eastern Hill University",
  "Tilka Manjhi Bhagalpur University",
  "Devi Ahilya University",
  "Rajasthan Agricultural University",
  "Jiwaji University",
  "Rani Durgavati Vishwavidyalaya",
  "Pt. Ravishankar Shukla University",
  "Sant Gadge Baba Amravati University",
  "Shivaji University",
  "Saurashtra University",
  "Bhavnagar University",
  "Gujarat Vidyapith",
  "Maharaja Sayajirao University of Baroda",
  "Gulbarga University",
  "Mangalore University",
  "Kuvempu University",
  "Karnatak University",
  "Bangalore University",
  "Mysore University",
  "Mangalore University",
  "University of Agricultural Sciences",
  "University of Agricultural Sciences",
  "University of Agricultural Sciences",
  "Karnataka Veterinary, Animal and Fisheries Sciences University",
  "University of Agricultural Sciences",
  "Maharashtra Animal and Fishery Sciences University",
  "University of Agricultural Sciences",
  "Maharashtra Animal and Fishery Sciences University",
  "Dr. Balasaheb Sawant Konkan Krishi Vidyapeeth",
  "Mahatma Phule Krishi Vidyapeeth",
  "Marathwada Agricultural University",
  "Vasantrao Naik Marathwada Krishi Vidyapeeth",
  "Konkan Krishi Vidyapeeth",
  "Punjab Agricultural University",
  "Guru Nanak Dev University",
  "Punjab Technical University",
  "Rajiv Gandhi University",
  "Maharishi Markandeshwar University",
  "Chaudhary Devi Lal University",
  "Kurukshetra University",
  "Haryana Agricultural University",
  "Jawaharlal Nehru University",
  "Jamia Millia Islamia University",
  "University of Delhi",
  "Jamia Hamdard University",
  "Amity University",
  "Guru Gobind Singh Indraprastha University",
  "Bundelkhand University",
  "Uttar Pradesh Technical University",
  "Integral University",
  "Sampurnanand Sanskrit University",
  "King George's Medical University",
  "University of Lucknow",
  "Banaras Hindu University",
  "Uttar Pradesh Rajarshi Tandon Open University",
  "Uttar Pradesh Rajarshi Tandon Open University",
  "Chhatrapati Shahu Ji Maharaj University",
  "Dr. B.R. Ambedkar University",
  "Babasaheb Bhimrao Ambedkar University",
  "Mahatma Jyotiba Phule Rohilkhand University",
  "Aligarh Muslim University",
  "Uttar Pradesh Technical University",
  "Indian Veterinary Research Institute",
  "Rajendra Agricultural University",
  "Tilka Manjhi Bhagalpur University",
  "Bhupendra Narayan Mandal University",
  "Lalit Narayan Mithila University",
  "Magadh University",
  "Veer Kunwar Singh University",
  "Dr. Ram Manohar Lohia Avadh University",
  "Chaudhary Charan Singh University",
  "Deen Dayal Upadhyay Gorakhpur University",
  "Mahatma Gandhi Kashi Vidyapeeth",
  "Allahabad University",
  "University of Lucknow",
  "Baba Ghulam Shah Badhshah University",
  "University of Jammu",
  "University of Kashmir",
  "Shri Mata Vaishno Devi University",
  "Central University of Jammu",
  "Sher-e-Kashmir University of Agricultural Sciences and Technology",
  "Sher-e-Kashmir University of Agricultural Sciences and Technology",
  "University of Madras",
  "Bharathiar University",
  "Bharathidasan University",
  "Alagappa University",
  "University of Madras",
  "Annamalai University",
  "Bharathidasan University",
  "Manonmaniam Sundaranar University",
  "Mother Teresa Women's University",
  "Periyar University",
  "Tamil Nadu Agricultural University",
  "Tamil Nadu Dr. M.G.R. Medical University",
  "Tamil Nadu Dr. Ambedkar Law University",
  "Tamil Nadu Dr. J. Jayalalithaa Fisheries University",
  "Tamil Nadu Dr. J. Jayalalithaa Music and Fine Arts University",
  "Tamil Nadu Physical Education and Sports University",
  "Tamil Nadu Teachers Education University",
  "Tamil Nadu Veterinary and Animal Sciences University",
  "Tamil University",
  "University of Agricultural Sciences",
  "University of Agricultural Sciences",
  "Visvesvaraya Technological University",
  "University of Agricultural Sciences",
  "Karnataka State Open University",
  "Karnataka State Women's University",
  "Karnataka University",
  "Karnataka Veterinary, Animal and Fisheries Sciences University",
  "Kuvempu University",
  "Mangalore University",
  "Mysore University",
  "Rani Channamma University",
  "Tumkur University",
  "Vijayanagara Sri Krishnadevaraya University",
  "Karnataka Folklore University",
  "University of Agricultural Sciences",
  "University of Agricultural Sciences",
  "University of Agricultural Sciences",
  "Karnataka State Law University",
  "University of Agricultural Sciences",
  "University of Agricultural Sciences",
  "University of Agricultural Sciences",
  "Karnataka State Open University",
  "Karnataka State Women's University",
  "Karnataka University",
  "Karnataka Veterinary, Animal and Fisheries Sciences University",
  "Kuvempu University",
  "Mangalore University",
  "Mysore University",
  "Rani Channamma University",
  "Tumkur University",
  "Vijayanagara Sri Krishnadevaraya University",
  "Karnataka Folklore University",
  "University of Agricultural Sciences",
  "University of Agricultural Sciences",
  "Visvesvaraya Technological University",
  "Karnataka State Law University",
  "University of Agricultural Sciences",
  "Kerala Agricultural University",
  "University of Kerala",
  "University of Calicut",
  "Mahatma Gandhi University",
  "Cochin University of Science and Technology",
  "Kerala Veterinary and Animal Sciences University",
  "Kerala University of Fisheries and Ocean Studies",
  "Kerala Kalamandalam",
  "Kannur University",
  "Kerala University of Health Sciences",
  "Kerala Agricultural University",
  "University of Kerala",
  "University of Calicut",
  "Mahatma Gandhi University",
  "Cochin University of Science and Technology",
  "Kerala Veterinary and Animal Sciences University",
  "Kerala University of Fisheries and Ocean Studies",
  "Kerala Kalamandalam",
  "Kannur University",
  "Kerala University of Health Sciences",
  "Dr. Balasaheb Sawant Konkan Krishi Vidyapeeth",
  "Maharashtra Animal and Fishery Sciences University",
  "Dr. Panjabrao Deshmukh Krishi Vidyapeeth",
  "Konkan Krishi Vidyapeeth",
  "Marathwada Agricultural University",
  "North Maharashtra University",
  "Sant Gadge Baba Amravati University",
  "Swami Ramanand Teerth Marathwada University",
  "Shivaji University",
  "Solapur University",
  "Yashwantrao Chavan Maharashtra Open University",
  "Maharashtra Animal and Fishery Sciences University",
  "Dr. Balasaheb Sawant Konkan Krishi Vidyapeeth",
  "Maharashtra Animal and Fishery Sciences University",
  "Dr. Panjabrao Deshmukh Krishi Vidyapeeth",
  "Konkan Krishi Vidyapeeth",
  "Marathwada Agricultural University",
  "North Maharashtra University",
  "Sant Gadge Baba Amravati University",
  "Swami Ramanand Teerth Marathwada University",
  "Shivaji University",
  "Solapur University",
  "Yashwantrao Chavan Maharashtra Open University",
  "Dr. Balasaheb Sawant Konkan Krishi Vidyapeeth",
  "Maharashtra Animal and Fishery Sciences University",
  "Dr. Panjabrao Deshmukh Krishi Vidyapeeth",
  "Konkan Krishi Vidyapeeth",
  "Marathwada Agricultural University",
  "North Maharashtra University",
  "Sant Gadge Baba Amravati University",
  "Swami Ramanand Teerth Marathwada University",
  "Shivaji University",
  "Solapur University",
  "Yashwantrao Chavan Maharashtra Open University",
  "Dr. Balasaheb Sawant Konkan Krishi Vidyapeeth",
  "Maharashtra Animal and Fishery Sciences University",
  "Dr. Panjabrao Deshmukh Krishi Vidyapeeth",
  "Konkan Krishi Vidyapeeth",
  "Marathwada Agricultural University",
  "North Maharashtra University",
  "Sant Gadge Baba Amravati University",
  "Swami Ramanand Teerth Marathwada University",
  "Shivaji University",
  "Solapur University",
  "Yashwantrao Chavan Maharashtra Open University",
  "Dr. Balasaheb Sawant Konkan Krishi Vidyapeeth",
  "Maharashtra Animal and Fishery Sciences University",
  "Dr. Panjabrao Deshmukh Krishi Vidyapeeth",
  "Konkan Krishi Vidyapeeth",
  "Marathwada Agricultural University",
  "North Maharashtra University",
  "Sant Gadge Baba Amravati University",
  "Swami Ramanand Teerth Marathwada University",
  "Shivaji University",
  "Solapur University",
  "Yashwantrao Chavan Maharashtra Open University",
  "Maharashtra Animal and Fishery Sciences University",
  "Dr. Balasaheb Sawant Konkan Krishi Vidyapeeth",
  "Dr. Panjabrao Deshmukh Krishi Vidyapeeth",
  "Konkan Krishi Vidyapeeth",
  "Marathwada Agricultural University",
  "North Maharashtra University",
  "Sant Gadge Baba Amravati University",
  "Swami Ramanand Teerth Marathwada University",
  "Shivaji University",
  "Solapur University",
  "Yashwantrao Chavan Maharashtra Open University",
  "Dr. Balasaheb Sawant Konkan Krishi Vidyapeeth",
  "Maharashtra Animal and Fishery Sciences University",
  "Dr. Panjabrao Deshmukh Krishi Vidyapeeth",
  "Konkan Krishi Vidyapeeth",
  "Marathwada Agricultural University",
  "North Maharashtra University",
  "Sant Gadge Baba Amravati University",
  "Swami Ramanand Teerth Marathwada University",
  "Shivaji University",
  "Solapur University",
  "Yashwantrao Chavan Maharashtra Open University",
  "Dr. Balasaheb Sawant Konkan Krishi Vidyapeeth",
  "Maharashtra Animal and Fishery Sciences University",
  "Dr. Panjabrao Deshmukh Krishi Vidyapeeth",
  "Konkan Krishi Vidyapeeth",
  "Marathwada Agricultural University",
  "North Maharashtra University",
  "Sant Gadge Baba Amravati University",
  "Swami Ramanand Teerth Marathwada University",
  "Shivaji University",
  "Solapur University",
  "Yashwantrao Chavan Maharashtra Open University",
  "Dr. Balasaheb Sawant Konkan"
]







  
  export default universities;
  