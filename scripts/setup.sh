if [[ -f '.git/index' ]]
then
    cp scripts/pre-commit .git/hooks
    chmod +x .git/hooks/pre-commit
fi
