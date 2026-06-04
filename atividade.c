#include <stdio.h>
int main() {
    int a[15];
    int i, j, temp;
    int busca;
    int inicio, fim, meio;
    int pos = -1;
    printf("Digite 15 numeros inteiros:\n");
    for(i = 0; i < 15; i++) {
        printf("A[%d]: ", i);
        scanf("%d", &a[i]);
    }
    for(i = 0; i < 14; i++) {
        for(j = 0; j < 14 - i; j++) {
            if(a[j] > a[j + 1]) {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
    printf("\nVetor ordenado:\n");
    for(i = 0; i < 15; i++) {
        printf("%d ", a[i]);
    }
    printf("\n\nDigite o valor a pesquisar: ");
    scanf("%d", &busca);
    inicio = 0;
    fim = 14;
    while(inicio <= fim) {
        meio = (inicio + fim) / 2;
        if(a[meio] == busca) {
            pos = meio;
            break;
        } else if(a[meio] < busca) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }
    if(pos != -1) {
        printf("Valor encontrado na posicao %d\n", pos);
    } else {
        printf("Valor nao encontrado.\n");
    }
    return 0;
}