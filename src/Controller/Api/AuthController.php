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

class AuthController extends AbstractController
{
    /**
     * This action is just for authenticate via JWT.
     * See here the documentation: https://github.com/lexik/LexikJWTAuthenticationBundle/blob/2.x/Resources/doc/index.md
     */
    #[Route('/api/login', name: 'api_login', methods: ['POST'])]
    public function login() {}
}
