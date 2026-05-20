#include <stdio.h
int main() {
    float A[6], B[6];
    int i;
    printf("Digite os elementos do vetor A:\n");
    for(i = 0; i < 6; i++) {
        printf("A[%d]: ", i);
        scanf("%f", &A[i]);
    }
    for(i = 0; i < 6; i++) {
        if(i % 2 == 0) {
            B[i] = A[i + 1];
        }
        else {
            B[i] = A[i - 1];
        }
    }
    printf("\nVetor A:\n");

    for(i = 0; i < 6; i++) {
        printf("%.2f ", A[i]);
    }
    printf("\n\nVetor B:\n");
    for(i = 0; i < 6; i++) {
        printf("%.2f ", B[i]);
    }
    return 0;
}