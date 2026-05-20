#include <stdio.h>
#include <string.h>
int main() {
    int N, i, j;
    char nome[50];
    char aprovadosTodas[100][50];
    char aprovados1e4[100][50];
    int contTodas = 0, cont1e4 = 0;
    int aprovadosMat3 = 0;
    float nota[5];
    printf("Quantidade de alunos: ");
    scanf("%d", &N);
    for (i = 0; i < N; i++) {
        printf("\nNome do aluno: ");
        scanf("%s", nome);
        int todasAprovadas = 1;
        int mat1e4 = 1;
        for (j = 0; j < 5; j++) {
            printf("Nota %d: ", j + 1);
            scanf("%f", &nota[j]);
            if (nota[j] < 7.0)
                todasAprovadas = 0;
            if ((j == 0 || j == 3) && nota[j] < 7.0)
                mat1e4 = 0;
        }
        if (todasAprovadas) {
            strcpy(aprovadosTodas[contTodas], nome);
            contTodas++;
        }
        if (mat1e4) {
            strcpy(aprovados1e4[cont1e4], nome);
            cont1e4++;
        }
        if (nota[2] >= 7.0)
            aprovadosMat3++;
    }
    printf("\n=== RESULTADOS ===\n");
    printf("\nAprovados em todas as materias:\n");
    for (i = 0; i < contTodas; i++) {
        printf("%s\n", aprovadosTodas[i]);
    }
    printf("\nAprovados nas materias 1 e 4:\n");
    for (i = 0; i < cont1e4; i++) {
        printf("%s\n", aprovados1e4[i]);
    }
    printf("\nPorcentagem aprovados na materia 3: %.2f%%\n",
           (float)aprovadosMat3 / N * 100);
    return 0;
}