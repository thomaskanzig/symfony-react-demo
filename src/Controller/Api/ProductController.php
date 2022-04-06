<?php

namespace App\Controller\Api;

use App\Entity\Product;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\InvalidCsrfTokenException;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class ProductController extends AbstractController
{
    #[Route('/api/products', name: 'api_product_list', methods: ['GET'])]
    public function list(Request $request, ProductRepository $productRepository): Response
    {
        $tokenApi = $request->headers->get('Authorization');

        if (!$this->isCsrfTokenValid('authApiToken', $tokenApi)) {
            throw new InvalidCsrfTokenException();
        }

        /** @var Product $products */
        $products = $productRepository->findAll();

        if (!$products) {
            return $this->json([], Response::HTTP_NO_CONTENT);
        }

        /** @var Serializer $serializer */
        $serializer = new Serializer([new ObjectNormalizer()]);
        $jsonData = $serializer->normalize($products, 'json');

        return $this->json($jsonData, Response::HTTP_OK);
    }

    #[Route('/api/product/{productId}', name: 'api_product_detail', methods: ['GET'])]
    public function detail(string $productId, Request $request, ProductRepository $productRepository): Response
    {
        $tokenApi = $request->headers->get('Authorization');

        if (!$this->isCsrfTokenValid('authApiToken', $tokenApi)) {
            throw new InvalidCsrfTokenException();
        }

        /** @var Product $products */
        $products = $productRepository->find($productId);

        if (!$products) {
            return $this->json([], Response::HTTP_NO_CONTENT);
        }

        /** @var Serializer $serializer */
        $serializer = new Serializer([new ObjectNormalizer()]);
        $jsonData = $serializer->normalize($products, 'json');

        return $this->json($jsonData, Response::HTTP_OK);
    }
}
