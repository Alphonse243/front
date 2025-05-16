# Site Web Radio Info

Un site web moderne pour une station radio avec blog d'actualités quotidiennes.

## Fonctionnalités

- Design responsive et moderne
- Section d'actualités quotidiennes
- Grille des programmes d'émissions
- Section podcasts
- Inscription à la newsletter
- Bouton d'écoute en direct
- Animations au défilement
- Navigation fluide

## Technologies utilisées

- HTML5
- CSS3 (avec variables, flexbox, grid et animations)
- JavaScript (vanilla)
- Font Awesome pour les icônes

## Structure du site

1. **En-tête** - Logo et navigation
2. **Bannière d'accueil** - Avec bouton d'écoute en direct
3. **Actualités du jour** - Articles récents
4. **Émissions** - Grille des programmes
5. **Podcasts** - Émissions à écouter en différé
6. **Newsletter** - Formulaire d'inscription
7. **Pied de page** - Informations de contact et liens utiles

## Comment personnaliser

### Modifier les images

Remplacez les images placeholder par vos propres images :

1. Dans la section hero, modifiez l'URL de l'image d'arrière-plan dans le fichier CSS :
```css
.hero {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('votre-image.jpg') no-repeat center center/cover;
}
```

2. Pour les actualités et podcasts, remplacez les images placeholder :
```html
<img src="chemin/vers/votre-image.jpg" alt="Description">
```

### Modifier les couleurs

Le site utilise des variables CSS pour les couleurs. Modifiez-les facilement dans le fichier `styles.css` :

```css
:root {
    --primary-color: #FF4D4D; /* Couleur principale */
    --secondary-color: #2E3192; /* Couleur secondaire */
    /* Autres variables de couleur */
}
```

### Ajouter du contenu

Pour ajouter une nouvelle actualité, copiez un des blocs d'article existants et modifiez son contenu :

```html
<article class="news-card">
    <div class="news-image">
        <img src="votre-image.jpg" alt="Actualité">
        <span class="news-category">Catégorie</span>
    </div>
    <div class="news-content">
        <h3>Titre de votre actualité</h3>
        <p class="news-date"><i class="far fa-calendar-alt"></i> Date</p>
        <p class="news-excerpt">Votre texte ici...</p>
        <a href="#" class="read-more">Lire la suite</a>
    </div>
</article>
```

## Comment démarrer

1. Clonez ou téléchargez ce projet
2. Ouvrez le fichier `index.html` dans votre navigateur
3. Pour le développement, vous pouvez utiliser un serveur local comme Live Server dans VS Code

## Compatibilité

Ce site est compatible avec :
- Chrome (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Edge (dernières versions)
- Responsive pour mobiles et tablettes 