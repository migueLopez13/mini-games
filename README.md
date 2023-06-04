# Mini-games

Mini-games is a GitHub project that aims to provide a collection of fun and entertaining games for users to enjoy. Although the project is intended to have multiple games, currently, it only features one game called "Refranero de Teba." This game challenges players to guess Spanish traditional sayings by discovering letters, similar to the concept of hangman.

## Game Description: Refranero de Teba

"Refranero de Teba" is a game that tests your knowledge of Spanish traditional sayings. Players are presented with a hidden saying and must guess the letters to uncover the complete phrase. The game provides hints and feedback to guide players towards the correct answer. It's a great way to learn and explore the rich cultural heritage of Spanish proverbs.

## Technologies Used

The Mini-games project utilizes the following technologies:

- Frontend: Vue.js
- Backend: Django + MySQL
- Containerization: Docker

## Development Setup

To set up the project for development, follow these steps:

1. Start the Docker containers by running the following command:

```bash
docker-compose up
```

2. Seed the database with initial data:

```bash
docker-compose exec backend bash
python manage.py loaddata proverbs.json
```

## Playing the Game

The game is also available to play through the production server. You can access it using the following URL: https://www.teba-mini-games.fun/

## Authors

The Mini-games project was developed by:

- [Sergio Saez Trigueros](https://github.com/Sergiosaezz) - [LinkedIn](https://www.linkedin.com/in/sergio-sáez-trigueros-59bb77230)
- [Miguel Angel Lopez Ariza](https://github.com/migueLopez13) - [LinkedIn](https://www.linkedin.com/in/miguel-ángel-lópez-ariza)

Feel free to reach out to the authors if you have any questions or feedback regarding the project.

## License

This project is licensed under the MIT License. Feel free to modify and distribute it as per the terms of the license.
