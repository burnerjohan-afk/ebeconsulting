# Script d'installation automatique de Docker Desktop pour Windows
Write-Host "🐳 Installation de Docker Desktop..." -ForegroundColor Cyan

# Vérifier si Docker est déjà installé
if (Get-Command docker -ErrorAction SilentlyContinue) {
    Write-Host "✅ Docker est déjà installé!" -ForegroundColor Green
    docker --version
    exit 0
}

# URL de téléchargement Docker Desktop
$dockerUrl = "https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe"
$installerPath = "$env:TEMP\DockerDesktopInstaller.exe"

Write-Host "📥 Téléchargement de Docker Desktop..." -ForegroundColor Yellow
try {
    Invoke-WebRequest -Uri $dockerUrl -OutFile $installerPath -UseBasicParsing
    Write-Host "✅ Téléchargement terminé" -ForegroundColor Green
} catch {
    Write-Host "❌ Erreur lors du téléchargement: $_" -ForegroundColor Red
    exit 1
}

Write-Host "🔧 Installation de Docker Desktop..." -ForegroundColor Yellow
Write-Host "⚠️  Une fenêtre d'installation va s'ouvrir. Suivez les instructions." -ForegroundColor Yellow
Write-Host "⚠️  Vous devrez peut-être redémarrer votre ordinateur après l'installation." -ForegroundColor Yellow

# Lancer l'installateur
Start-Process -FilePath $installerPath -Wait

Write-Host "✅ Installation terminée!" -ForegroundColor Green
Write-Host "⚠️  Si Docker ne fonctionne pas, redémarrez votre ordinateur et relancez: npm run db:up" -ForegroundColor Yellow


